import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContentText } from "@mui/material";
import Slide from "@mui/material/Slide";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState, useEffect } from "react";
import SimpleBackdrop from "../loading/Backdrop";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { ManualDialog } from "./ManualDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SlideDialogLab = ({ setLoadingDialog, formValue }) => {
  const [open, setOpen] = useState(false);
  const [subDialogOpen, setSubDialogOpen] = useState(false);
  const [automatiqueDialogOpen, setAutomatiqueDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(false);
  const [over, setOver] = useState(false);
  const [overerror, setOvererror] = useState(false);
  const [labtitle, setLabTitle] = useState("");
  const [labmanual, setlabmanual] = useState(false);

  const resetStates = () => {
    setStart(false);
    setOver(false);
    setOvererror(false);
    setResponse(null);
    setError(null);
  };
  const SendToFlask = (lab) => {
    console.log(lab);
    resetStates();
    setStart(true);
    postData(lab);
    // GetDeviceStatus()
    setLabTitle(lab);
    handleClose();
    localStorage.setItem("close", JSON.stringify(false));
  };

  const postData = async (lab) => {
    console.log(lab);

    try {
      const res = await fetch("http://127.0.0.1:5000/python/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ lab }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      setResponse(data.response);
      console.log(response);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(response);
    if (response == true) {
      setStart(false);
      setOver(true);
      // setlabmanual(true)
      handleAutomatiqueDialogClose();
      handleSubDialogClose();
      console.log("lab finis");
    }
    if (response == false) {
      setStart(false);
      setOver(false);
      setOvererror(true);
      handleAutomatiqueDialogClose();
      handleSubDialogClose();
      console.log("lab FAILED");
    }
  }, [response]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubDialogOpen = (content) => {
    if (content === "Automatique") {
      setAutomatiqueDialogOpen(true);
    } else {
      setDialogContent(content);
      setSubDialogOpen(true);
    }
  };

  const handleSubDialogClose = () => {
    setSubDialogOpen(false);
  };

  const handleAutomatiqueDialogClose = () => {
    setAutomatiqueDialogOpen(false);
  };

  const handleOverClose = () => {
    setOver(false);
  };

  const handleOverErrorClose = () => {
    setOvererror(false);
  };

  return (
    <React.Fragment>
      {start ? (
        <SimpleBackdrop
          title={"Lab"}
          SendToFlask={SendToFlask}
          response={response}
          handleAutomatiqueDialogClose={handleAutomatiqueDialogClose}
          setStart={setStart}
          start={start}
          setOver={setOver}
          over={over}
          setOvererror={setOvererror}
          overerror={overerror}
          setLoadingDialog={setLoadingDialog}
          formValue={formValue}
        />
      ) : over ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <Stack sx={{ width: "20%" }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Succès</AlertTitle>
              LAB {labtitle + " "}terminé —{" "}
              <strong>l'installation du lab est réussie!</strong>
            </Alert>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOverClose}
              sx={{ mt: 2 }}
            >
              Fermer
            </Button>
          </Stack>
        </Backdrop>
      ) : overerror ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <Stack sx={{ width: "20%" }} spacing={2}>
            <Alert severity="error">
              <AlertTitle>Erreur</AlertTitle>
              LAB {labtitle + " "}terminé avec une erreur —{" "}
              <strong>l'installation du lab a échoué!</strong>
            </Alert>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOverErrorClose}
              sx={{ mt: 2 }}
            >
              Fermer
            </Button>
          </Stack>
        </Backdrop>
      ) : (
        <>
          <Button
            sx={{
              width: "200px",
              height: "60px",
              fontFamily: "DM Sans",
              color: "#58afd1",
              textTransform: "none",
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            startIcon={<PlayArrowIcon />}
            className="btn draw-border"
            onClick={handleClickOpen}
          >
            {"Start"}
          </Button>
          <Button
            sx={{
              width: "200px",
              height: "60px",
              fontFamily: "DM Sans",
              color: "#58afd1",
              textTransform: "none",
              fontSize: "20px",
              marginBottom: "10px",
            }}
            startIcon={<RestartAltIcon />}
            className="btn draw-border"
            onClick={() => SendToFlask("reset")}
          >
            {"Reset"}
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <strong>{"Automatisation Arista"}</strong>
            </DialogTitle>
            <DialogContent>
              <Button onClick={() => handleSubDialogOpen("Automatique")}>
                Lab Automatique
              </Button>
              <Button onClick={() => handleSubDialogOpen("manuel")}>
                Lab Manuel
              </Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Fermer</Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={subDialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleSubDialogClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <strong>{`Mode ${dialogContent}`}</strong>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <p>
                  En sélectionnant le mode manuel l'automatisation se déroulera
                  normalement mais laissera volontairement l'équipement Leaf4
                  non configuré
                </p>

                <h2>Flexibilité offerte à l'utilisateur</h2>

                <p>
                  En laissant le Leaf 5 non configuré, nous offrons à
                  l'utilisateur la possibilité de se familirariser avec
                  l'environnement Arista et de mieux comprendre les différents
                  protocoles abordés dans ce lab en configurant manuellement le
                  switch .
                </p>
                <h2>Assistance</h2>

                <p>
                  Bien que la configuration du Leaf 4 soit laissée à
                  l'utilisateur, nous lui fournirons les commandes nécessaires
                  ainsi que des explications détaillées sur la manière de
                  procéder.
                </p>

                <h2>Choissisez votre Lab</h2>

                <Button onClick={() => SendToFlask("manuel mlag")}>MLAG</Button>
                <Button onClick={() => SendToFlask("manuel bgp")}>BGP</Button>
                <Button onClick={() => SendToFlask("manuel vxlan evpn")}>
                  VXLAN EVPN L2
                </Button>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubDialogClose}>Fermer</Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={automatiqueDialogOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleAutomatiqueDialogClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>
              <strong>{"Mode Automatique"}</strong>
            </DialogTitle>
            <DialogContent>
              <h2>Lab entièrement automatisé</h2>

              <p>
                Choisissez le lab de votre choix et il sera entièrement
                configuré en moins d'une minute .
              </p>
              <Button onClick={() => SendToFlask("mlag")}>MLAG</Button>
              <Button onClick={() => SendToFlask("bgp")}>BGP</Button>
              <Button onClick={() => SendToFlask("vxlan evpn")}>
                VXLAN EVPN L2
              </Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleAutomatiqueDialogClose}>Fermer</Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </React.Fragment>
  );
};

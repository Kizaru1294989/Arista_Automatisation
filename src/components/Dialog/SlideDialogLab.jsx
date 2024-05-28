import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';
import Slide from '@mui/material/Slide';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState, useEffect } from 'react';
import SimpleBackdrop from '../loading/Backdrop';
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SlideDialogLab = () => {
  const [open, setOpen] = useState(false);
  const [subDialogOpen, setSubDialogOpen] = useState(false);
  const [automatiqueDialogOpen, setAutomatiqueDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(false);
  const [over, setOver] = useState(false);
  const [labtitle, setLabTitle] = useState("");

  const SendToFlask = (lab) => {
    console.log(lab);
    setStart(true);
    postData(lab);
    setLabTitle(lab)
    handleClose();

  };

  const postData = async (lab) => {
    console.log(lab);

    try {
      const res = await fetch('http://127.0.0.1:5000/python/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ lab })
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data);
      console.log(response);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (response) {
      setStart(false);
      setOver(true);
      handleAutomatiqueDialogClose();
      console.log("lab finis");
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
        />
      ) : over ? (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
                <Stack sx={{ width: '20%' }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Succès</AlertTitle>
            LAB {labtitle + " "}terminé — <strong>l'installation du lab est réussie!</strong>
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
              marginTop: '10px',
              marginBottom: '10px'
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
              marginBottom: '10px'
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
            <DialogTitle><h1>{"Automatisation Arista"}</h1></DialogTitle>
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
            <DialogTitle><h1>{`Mode ${dialogContent}`}</h1></DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {dialogContent === "complet" ? "Vous avez choisi le mode complet." : "Vous avez choisi le mode manuel."}
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
            <DialogTitle><h1>{"Mode Automatique"}</h1></DialogTitle>
            <DialogContent>
              <Button onClick={() => SendToFlask("mlag")}>
                MLAG
              </Button>
              <Button onClick={() => SendToFlask("bgp")}>
                BGP
              </Button>
              <Button onClick={() => SendToFlask("evpn")}>
                VXLAN EVPN L2
              </Button>
              <Button onClick={() => SendToFlask("all")}>
                ALL
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
}

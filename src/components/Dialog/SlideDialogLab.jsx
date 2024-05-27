import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';
import Slide from '@mui/material/Slide';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import CircularWithValueLabel from '../pages/Home/CircularWithValueLabel';
import { Loading  } from '../loading/Loading';
import SimpleBackdrop from '../loading/Backdrop';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



export const SlideDialogLab = () => {
  const [open, setOpen] = React.useState(false);
  const [subDialogOpen, setSubDialogOpen] = React.useState(false);
  const [automatiqueDialogOpen, setAutomatiqueDialogOpen] = React.useState(false);
  const [dialogContent, setDialogContent] = React.useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(null);

  const SendToFlask = (lab) => {
    console.log(lab)
    postData(lab)
    handleClose()
    
  }
  
  const postData = async (lab) => {
    console.log(lab)
  
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
        setResponse(data.message);
        console.log(response)
      } catch (error) {
        setError(error.message);
        console.log(error)
      }
    };
  


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

  return (
    <React.Fragment>
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
        <SimpleBackdrop 
          title={"mlag"}
          SendToFlask={SendToFlask}
          response={response}
          />
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
    </React.Fragment>
  );
}

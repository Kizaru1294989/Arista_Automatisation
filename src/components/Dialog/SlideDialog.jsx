import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import HelpIcon from "@mui/icons-material/Help";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SlideDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        }}
        startIcon={<HelpIcon />}
        className="btn draw-border"
        onClick={handleClickOpen}
      >
        {"Informations"}
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
          <p>
            Ce laboratoire pratique a pour objectif d'automatiser la
            configuration de protocoles réseau avancés tels que MLAG
            (Multi-Chassis Link Aggregation), BGP (Border Gateway Protocol), et
            VXLAN EVPN (Virtual Extensible LAN Ethernet VPN) L2 sur des switchs
            Arista. Il est conçu pour permettre aux participants de se
            familiariser avec les techniques et les outils nécessaires pour
            déployer et gérer ces protocoles de manière efficace et automatisée.
          </p>
          <p>
            Le lab est structuré en trois parties distinctes, chacune couvrant
            un aspect essentiel de la configuration des protocoles mentionnés.
            Les participants ont la flexibilité de commencer par n'importe
            quelle partie selon leurs préférences ou besoins spécifiques. De
            plus, il est possible de choisir entre lancer le lab pour configurer
            automatiquement tous les éléments nécessaires ou laisser un switch
            "leaf" vierge afin de pratiquer la configuration manuelle.
          </p>

          <h2>Parties du Lab :</h2>

          <h3>Configuration de MLAG :</h3>

          <h3>Configuration de BGP :</h3>

          <h3>Configuration de VXLAN EVPN L2 :</h3>

          <p>
            Ce lab offre une opportunité précieuse pour comprendre et maîtriser
            les configurations automatisées sur les switchs Arista, en
            fournissant à la fois un environnement d'apprentissage structuré et
            la flexibilité nécessaire pour des expérimentations pratiques.
          </p>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { CardContent, Button } from "@mui/material";
import HomeCard from "../HomeCard/HomeCard";
import { ManualDialog } from "../../../Dialog/ManualDialog";
import { labs } from "../ComponentData/Component";
import { renderLabImage } from "../ComponentData/Component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SlideDialog } from "../../../Dialog/SlideDialog";
import { SlideDialogLab } from "../../../Dialog/SlideDialogLab";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HandymanIcon from '@mui/icons-material/Handyman';
import BuildIcon from '@mui/icons-material/Build';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { ItemTitle } from "./ItemStyle/Item";
import { Item } from "./ItemStyle/Item";

export const HomeComponent = ({
  lab,
  status,
  setLoadingDialog,
  formValue,
  setManuel,
  manuel,
}) => {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [instructions, setInstructions] = useState("");
  const [Logo, setLogo] = useState(null);

  const handleNextLab = () => {
    setCurrentLabIndex((prevIndex) => (prevIndex + 1) % labs.length);
  };
  const handleInstructionsLab = (labactual) => {
    setOpen(true);
  };

  const handlePrevLab = () => {
    setCurrentLabIndex(
      (prevIndex) => (prevIndex - 1 + labs.length) % labs.length,
    );
  };

  useEffect(() => {
    switch (lab) {
      case "bgp":
        setCurrentLabIndex(1);
        setManuel(false);
        break;
      case "mlag":
        setCurrentLabIndex(0);
        setManuel(false);
        break;
      case "manuel bgp":
        setCurrentLabIndex(1);
        setManuel(true);
        break;
      case "manuel mlag":
        setCurrentLabIndex(0);
        setManuel(true);
        break;
      case "manuel vxlan evpn":
        setCurrentLabIndex(2);
        setManuel(true);
        break;
      default:
        setCurrentLabIndex(2);
        setManuel(false);
        break;
    }
  }, [lab]);

  useEffect(() => {
    switch (status) {
      case "started":
        setLogo(<HourglassBottomIcon style={{ width: '100px', height: '58px' }} />);
        break;
      case "finished":
        setLogo(<CheckCircleOutlineIcon style={{ width: '100px', height: '58px', color: 'green' }} />);
        break;
      default:
        setLogo(<ErrorIcon style={{ width: '100px', height: '58px', color: 'red' }} />);
        break;
    }
  }, [status]);

  return (
    <Grid container spacing={2} sx={{ padding: '16px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}>

      <Grid item xs={12} >
        <Grid container spacing={2} sx={{ padding: '16px' , display : 'flex' , justifyContent : 'center' , alignItems : 'center' }}>
          <Grid item xs={2}>
            <HomeCard setLoadingDialog={setLoadingDialog} formValue={formValue} />
          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={2}>
              <Grid container item spacing={2}>
                <Grid item xs={2}>
                  <Item> <HomeRepairServiceIcon /> 10.43.192.129</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item> <AccountCircleIcon /> cvpadmin</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item> <KeyIcon /> Exaprobe1234</Item>
                </Grid>
                <Grid item xs={2}>
                  <Item> <LockOpenIcon /> Exaprobe1234</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item> <BuildIcon /> {labs[currentLabIndex].title}</Item>
                </Grid>
              </Grid>

              <Grid container item spacing={2} alignItems="center">
                <Grid item xs={11}>
                  <ItemTitle> <HandymanIcon style={{ width: '100px', height: '58px' }} /> Dernier Lab Selectionné : {lab + " LAB"}</ItemTitle>
                </Grid>
                <Grid item xs={1}>
                  <ItemTitle> {Logo} </ItemTitle>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Item>
                  {renderLabImage({ labs, currentLabIndex })}
                </Item>
              </Grid>

              <Grid container item spacing={2} justifyContent="center">
                <Grid item xs={2}>
                  <ItemTitle>
                    <Button startIcon={<ArrowBackIosIcon />} color="primary" onClick={handlePrevLab}>
                      Lab Précédent
                    </Button>
                  </ItemTitle>
                </Grid>
                <Grid item xs={2}>
                  {manuel ? (
                    <ItemTitle>
                      <Button
                        style={{ display: "flex", justifyContent: "center" }}
                        onClick={() => handleInstructionsLab(labs[currentLabIndex].name)}
                      >
                        Instructions Lab
                      </Button>
                    </ItemTitle>
                  ) : (
                    <Item><SettingsSuggestIcon style={{ width: '50px', height: '36px' }} />mode automatique activé</Item>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <ItemTitle>
                    <SlideDialog />
                  </ItemTitle>
                </Grid>
                <Grid item xs={4}>
                  <ItemTitle>
                    <SlideDialogLab
                      setLoadingDialog={setLoadingDialog}
                      formValue={formValue}
                    />
                  </ItemTitle>
                </Grid>
                <Grid item xs={2}>
                  <ItemTitle>
                    <Button endIcon={<ArrowForwardIosIcon />} color="primary" onClick={handleNextLab}>
                      Lab Suivant
                    </Button>
                  </ItemTitle>
                </Grid>
              </Grid>

              <ManualDialog
                lab={lab}
                instructions={instructions}
                setInstructions={setInstructions}
                open={open}
                setOpen={setOpen}
                currentLabIndex={currentLabIndex}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default HomeComponent;

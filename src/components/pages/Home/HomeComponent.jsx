import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { CardContent, Button } from "@mui/material";
import MLAG from "../../../assets/img/mlag.png";
import BGP from "../../../assets/img/bgp.png";
import EVPN from "../../../assets/img/evpn.png";
import HomeCard from "./HomeCard";
import LabSelection from "./TSX/LabSelection";
import { ManualDialog } from "../../Dialog/ManualDialog";
import { labs } from "./ComponentData/Component";
import { renderLabImage } from "./ComponentData/Component";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { SlideDialog } from "../../Dialog/SlideDialog";
import { SlideDialogLab } from "../../Dialog/SlideDialogLab";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HandymanIcon from '@mui/icons-material/Handyman';
import BuildIcon from '@mui/icons-material/Build';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: '8px',
  gap: '8px' ,
  textAlign: "center",
  borderRadius: "5px",
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent : 'center',
  
}));

const ItemTitle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: '8px',
  gap: '8px' ,
  textAlign: "center",
  borderRadius: "5px",
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent : 'center',
  fontSize : '40px'
  
}));

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
    console.log(labactual);
    setOpen(true);
    console.log(open);
  };

  const handlePrevLab = () => {
    setCurrentLabIndex(
      (prevIndex) => (prevIndex - 1 + labs.length) % labs.length,
    );
  };

  useEffect(() => {
    // console.log(lab)
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
    // Update the logo based on the status
    switch (status) {
      case "started":
        setLogo(<HourglassBottomIcon style={{width : '100px' , height : '58px'}}/>);
        break;
      case "finished":
        setLogo(<CheckCircleOutlineIcon style={{width : '100px' , height : '58px' , color : 'green'}}/>);
        break;
      default:
        setLogo(ErrorIcon);
        break;
    }
  }, [status]);

  const maingrid = {
    display: "flex",

    margin: "30px",
  };

  const firstgrid = {
    display: "flex",
    flexDirection: "column",
  };

  const secondgrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  };

  const thirdgrid = {
    backgroundColor: "black",
    color: "white",
  };

  const fourthgrid = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Grid style={maingrid}>
        <Grid style={firstgrid}>
          <HomeCard setLoadingDialog={setLoadingDialog} formValue={formValue} />
        </Grid>
      </Grid>
      <Grid style={secondgrid}>
        <Grid container spacing={2}>
          <Grid item xs={1.5} md={1.5}>
            <Item> <HomeRepairServiceIcon/> 10.43.192.129</Item>
          </Grid>
          <Grid item xs={1.5} md={1.5}>
            <Item> <AccountCircleIcon/> cvpadmin</Item>
          </Grid>
          <Grid item xs={1.5} md={1.5}>
            <Item> <KeyIcon/> Exaprobe1234</Item>
          </Grid>
          <Grid item xs={1.5} md={1.5}>
            <Item>  <LockOpenIcon/> Exaprobe1234</Item>
          </Grid>
          <Grid item xs={5} md={5}>
            <Item>  <BuildIcon/> {labs[currentLabIndex].title}</Item>
          </Grid>
  
          <Grid item xs={8} md={8}>
            <ItemTitle>  <HandymanIcon style={{width : '100px' , height : '58px'}}/> Etape actuelle : {lab + " LAB " + status}</ItemTitle>
          </Grid>

          <Grid item xs={3} md={3}>
            <ItemTitle>  {Logo} </ItemTitle>
          </Grid>
          


          <Grid item xs={10} md={11}>
            <Item>
     
              {renderLabImage({ labs, currentLabIndex })}
            </Item>
          </Grid>


          <Grid item xs={2} md={2}>
            <ItemTitle>   <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={handlePrevLab}>
              Lab Précédent
            </Button> </ItemTitle>
          </Grid>
     
 


          <Grid item xs={2} md={2}>
              {manuel && (
               <ItemTitle> 
              <Button
                style={{ display: "flex", justifyContent: "center" }}
                // variant="contained"
                onClick={() =>
                  handleInstructionsLab(labs[currentLabIndex].name)
                }
              >
                Instructions Lab
              </Button>
              </ItemTitle>
            )}
          </Grid>

         
          <Grid item xs={2} md={2}>
            <ItemTitle>  
            <SlideDialog />
              
            </ItemTitle>
          </Grid>
           
          <Grid item xs={3} md={3}>
            <ItemTitle>  
            <SlideDialogLab
              setLoadingDialog={setLoadingDialog}
              formValue={formValue}
            />
            </ItemTitle>
          </Grid>
      
            <Grid item xs={2} md={2}>
            <ItemTitle>    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={handleNextLab}>
              Lab Suivant
            </Button></ItemTitle>
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
    </>
  );
};

export default HomeComponent;

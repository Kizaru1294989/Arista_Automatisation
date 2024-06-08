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

const labs = [
  { name: "MLAG", image: MLAG, title: "Lab Arista étape I : MLAG" },
  { name: "BGP", image: BGP, title: "Lab Arista étape II : BGP" },
  {
    name: "VXLAN L2 EVPN",
    image: EVPN,
    title: "Lab Arista étape III : VXLAN L2 EVPN",
  },
];

export default function MediaControlCard({
  lab,
  status,
  setLoadingDialog,
  formValue,
  setManuel,
  manuel,
}) {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [instructions, setInstructions] = useState("");

  const handleNextLab = () => {
    setCurrentLabIndex((prevIndex) => (prevIndex + 1) % labs.length);
  };

  const handleInstructionsLab = (labactual) => {
    console.log(labactual);
    // setInstructions(labactual)
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

  const renderLabImage = () => {
    const currentLab = labs[currentLabIndex];
    return (
      <img
        src={currentLab.image}
        alt={`${currentLab.name} Lab Image`}
        style={{ width: "1700px", height: "700px" }}
      />
    );
  };

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          backgroundColor: "#2d3436",
          backgroundImage: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
          width: "300px",
        }}
      >
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <HomeCard setLoadingDialog={setLoadingDialog} formValue={formValue} />
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "125px",
              pl: 1,
              pb: 1,
            }}
          ></Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Card>
          <CardContent sx={{ backgroundColor: "black" }}>
            <Grid>
              <h1
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {labs[currentLabIndex].title}
              </h1>
            </Grid>
            <Grid>
              <h1
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Etape actuelle : {lab + " LAB " + status}
              </h1>
              {renderLabImage()}
            </Grid>
            <Grid
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handlePrevLab}
              >
                Lab Précédent
              </Button>
              {manuel && (
                <Button
                  style={{ display: "flex", justifyContent: "center" }}
                  variant="contained"
                  onClick={() =>
                    handleInstructionsLab(labs[currentLabIndex].name)
                  }
                >
                  Afficher les instructions
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNextLab}
              >
                Lab Suivant
              </Button>
            </Grid>
            <ManualDialog
              lab={lab}
              instructions={instructions}
              setInstructions={setInstructions}
              open={open}
              setOpen={setOpen}
              currentLabIndex={currentLabIndex}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

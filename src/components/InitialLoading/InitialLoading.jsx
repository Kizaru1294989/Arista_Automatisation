import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ThreeDotsWave from "./three-dots-wave";

export const InitialLoading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", /* 100% de la hauteur de la fenêtre */
        width: "100vw", /* 100% de la largeur de la fenêtre */
        backgroundImage : "white",
        backgroundAttachment: "fixed",
      }}
    >
      <Stack sx={{ color: "black" }} spacing={2} direction="row">
        <ThreeDotsWave />
      </Stack>
    </div>
  );
};

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
        backgroundImage: 'radial-gradient(circle at 90% 24%, rgba(209, 209, 209,0.04) 0%, rgba(209, 209, 209,0.04) 50%,rgba(160, 160, 160,0.04) 50%, rgba(160, 160, 160,0.04) 100%),radial-gradient(circle at 91% 63%, rgba(45, 45, 45,0.04) 0%, rgba(45, 45, 45,0.04) 50%,rgba(87, 87, 87,0.04) 50%, rgba(87, 87, 87,0.04) 100%),radial-gradient(circle at 17% 2%, rgba(124, 124, 124,0.04) 0%, rgba(124, 124, 124,0.04) 50%,rgba(117, 117, 117,0.04) 50%, rgba(117, 117, 117,0.04) 100%),linear-gradient(88deg, rgb(33, 20, 105),rgb(1, 15, 13))',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <Stack sx={{ color: "#fdfdfd" }} spacing={2} direction="row">
        <ThreeDotsWave />
      </Stack>
    </div>
  );
};

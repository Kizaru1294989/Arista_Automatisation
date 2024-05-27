import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ThreeDotsWave from "./three-dots-wave";

export const LoadingReservation = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "35vh",
      }}
    >
      <Stack
        sx={{ color: "white", display: "flex" }}
        spacing={2}
        direction="row"
      >
        <ThreeDotsWave />
      </Stack>
    </div>
  );
};

import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import ThreeDotsWave from "./three-dots-wave";

export const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "10vh",
      }}
    >
      <Stack sx={{ color: "#fdfdfd" }} spacing={2} direction="row">
        <ThreeDotsWave />
      </Stack>
    </div>
  );
};

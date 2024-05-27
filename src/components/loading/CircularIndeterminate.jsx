import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const CircularIndeterminate = () => {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid
        item
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "300px",
              }}
            >
              <CircularProgress size={150} color="secondary" />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
};

import React from "react";
import { Grid } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import "./index.scss";

const Error404Component = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <section>
            <div class="content">
              <h2>Erreur404</h2>
              <h2>Erreur404</h2>
            </div>
          </section>
        </Grid>
      </motion.div>
    </AnimatePresence>
  );
};

export default Error404Component;

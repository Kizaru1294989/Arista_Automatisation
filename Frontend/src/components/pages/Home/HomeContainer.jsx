import React from "react";
import HomeComponent from "./HomeComponent";
import { motion } from "framer-motion";

export const HomeContainer = () => {
  return (
    <>

        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 3, scale: 1 }}
        >
          <HomeComponent />
        </motion.div>

    </>
  );
};

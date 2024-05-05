import React from "react";
import HomeComponent from "./HomeComponent";
import { motion } from "framer-motion";

import './index.scss'
export const HomeContainer = () => {
  return (
    <>

        <motion.div
        className="background"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 3, scale: 1 }}
        >
          <HomeComponent />
        </motion.div>

    </>
  );
};

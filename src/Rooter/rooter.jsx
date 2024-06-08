import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ROUTES } from "../constants/routesConst";
import { HomeContainer } from "../components/pages/Home/HomeContainer";
import Error404Component from "../components/pages/error/Error";
import { motion } from "framer-motion";

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 4 },
  exit: { opacity: 2 },
};

export const Rooter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          exact
          path={ROUTES.HOME.PATH}
          element={<HomeContainer />}
        />

        <Route
          path="*"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Error404Component />
            </motion.div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rooter;

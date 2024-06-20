import React, { useState, useEffect } from "react";
import HomeComponent from "./HomeComponent";
import { motion } from "framer-motion";
import { InitialLoading } from "../../InitialLoading/InitialLoading";
import { Loading } from "../../loading/Loading";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import "./index.scss";
import DoneIcon from "@mui/icons-material/Done";
import ErrorIcon from "@mui/icons-material/Error";
import { getHostStatus } from "../../HostStatus/GetHostStatus";
import { Chip } from "@mui/material";
import { DeviceStatus } from "../../HostStatus/DeviceStatus";
import SimpleBackdrop from "../../loading/Backdrop";

export const HomeContainer = () => {
  const [lab, setLab] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingDialog, setLoadingDialog] = useState(false);
  const [dialog, setDialog] = useState(true);
  const [accord, setAccord] = useState(false);
  const [manuel, setManuel] = useState(false);
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    host1: "",
    host2: "",
    host3: "",
    host4: "",

    spine1: "",
    spine2: "",
    spine3: "",
    spine4: "",

    leaf1: "",
    leaf2: "",
    leaf3: "",
    leaf4: "",
    leaf5: "",
    leaf6: "",
    leaf7: "",
    leaf8: "",
  });

  const GetLabStatus = async () => {
    try {
      const res = await fetch("http://10.43.193.195:5000/python/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.labs !== "") {
        console.log(data);

        setLab(data.labs[0]);
        setStatus(data.statut[0]);
        setFormValue({
          host1: data.host1,
          host2: data.host2,
          host3: data.host3,
          host4: data.host4,
          spine1: data.spine1,
          spine2: data.spine2,
          spine3: data.spine3,
          spine4: data.spine4,
          leaf1: data.leaf1,
          leaf2: data.leaf2,
          leaf3: data.leaf3,
          leaf4: data.leaf4,
          leaf5: data.leaf5,
          leaf6: data.leaf6,
          leaf7: data.leaf7,
          leaf8: data.leaf8,
        });
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    GetLabStatus();
    // GetDeviceStatus()
    const interval = setInterval(() => {
      GetLabStatus();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const close = localStorage.getItem("close");
    console.log(close);
    if (close === "false") {
      setAccord(false);
    } else {
      setAccord(true);
    }
  }, []);

  const handleClose = () => {
    setLoading(false);
    setDialog(false);
    localStorage.setItem("close", JSON.stringify(true));
  };

  return (
    <>
      {loading ? (
        <motion.div
          className="background"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 3, scale: 1 }}
        >
          <InitialLoading />
        </motion.div>
      ) : (
        <motion.div
          className="background"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 3, scale: 1 }}
        >
          {error ? (
            <p>Error: {error}</p>
          ) : (
            <>
              {status === "started" && !loadingDialog && (
                <Backdrop
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={dialog}
                >
                  <DeviceStatus
                    formValue={formValue}
                    getHostStatus={getHostStatus}
                  />
                  {/* <Loading />     */}
                </Backdrop>
              )}
              {status === "finished" && !accord && (
                <Backdrop
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={dialog}
                >
                  <Stack sx={{ width: "20%" }} spacing={2}>
                    <Alert severity="success">
                      <AlertTitle>Succès</AlertTitle>
                      LAB {lab} terminé —{" "}
                      <strong>l'installation du lab {lab} est réussie!</strong>
                    </Alert>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                      sx={{ mt: 2 }}
                    >
                      Fermer
                    </Button>
                  </Stack>
                </Backdrop>
              )}
              {status === "failed" && !accord &&  (
                <Backdrop
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={dialog}
                >
                  <Stack sx={{ width: "20%" }} spacing={2}>
                    <Alert severity="error">
                      <AlertTitle>Erreur</AlertTitle>
                      LAB {lab + " "}terminé avec une erreur —{" "}
                      <strong>l'installation du lab a échoué!</strong>
                    </Alert>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClose}
                      sx={{ mt: 2 }}
                    >
                      Fermer
                    </Button>
                  </Stack>
                </Backdrop>
              )}
              <HomeComponent
                lab={lab}
                status={status}
                setLoadingDialog={setLoadingDialog}
                formValue={formValue}
                setManuel={setManuel}
                manuel={manuel}
              />
            </>
          )}
        </motion.div>
      )}
    </>
  );
};

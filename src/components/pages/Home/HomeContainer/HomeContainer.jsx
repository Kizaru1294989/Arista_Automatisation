import React, { useState, useEffect } from "react";
import HomeComponent from "../HomeComponent/HomeComponent";
import { motion } from "framer-motion";
import { InitialLoading } from "../../../InitialLoading/InitialLoading";
import { SuccessComponent } from "../../../SuccessComponent/SuccessComponent";
import { FailedComponent } from "../../../FailedComponent/FailedComponent";
import { StartComponent } from "../../../StartComponent/StartComponent";
import { getHostStatus } from "../../../HostStatus/GetHostStatus";
import { GetLabStatus } from "./GetLabStatus";
import { FLASK_SERVER_IP } from "../../../../tools/ip_flask";
import "./index.scss";

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
  useEffect(() => {
    const GetLabStatus = async () => {
      try {
        const res = await fetch(`${FLASK_SERVER_IP}/python/get`, {
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
        console.log('ERROR :' + error);
      }
    };
    const interval = setInterval(() => {
      GetLabStatus();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const close = localStorage.getItem("close");
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
          <InitialLoading />
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
                <StartComponent dialog={dialog} lab={lab} handleClose={handleClose} formValue={formValue} getHostStatus={getHostStatus}/>
              )}
              {status === "finished" && !accord && (
                <SuccessComponent dialog={dialog} lab={lab} handleClose={handleClose}/>
              )}
              {status === "failed" && !accord && (
                <FailedComponent dialog={dialog} lab={lab} handleClose={handleClose}/>
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
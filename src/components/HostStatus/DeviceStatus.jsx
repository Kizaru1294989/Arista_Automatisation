import React, { useState, useEffect } from "react";
import { Chip } from "@mui/material";
import { Loading } from "../loading/Loading";

export const DeviceStatus = ({ getHostStatus, formValue }) => {


  return (
        <>
          <h4>
            Cela peut prendre moins d'une minute, merci de patienter durant
            l'installation du Lab
          </h4>
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.host1)}
            label="Host 1"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.host2)}
            label="Host 2"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.host3)}
            label="Host 3"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.host4)}
            label="Host 4"
          />

          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf1)}
            label="Leaf 1"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf2)}
            label="Leaf 2"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf3)}
            label="Leaf 3"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf4)}
            label="Leaf 4"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf5)}
            label="Leaf 5"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf6)}
            label="Leaf 6"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf7)}
            label="Leaf 7"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.leaf8)}
            label="Leaf 8"
          />

          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.spine1)}
            label="Spine 1"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.spine2)}
            label="Spine 2"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.spine3)}
            label="Spine 3"
          />
          <Chip
            sx={{ color: "white", margin: "5px" }}
            icon={getHostStatus(formValue.spine4)}
            label="Spine 4"
          />
        </>
  );
};

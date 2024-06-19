import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ButtonTarif } from "../../ButtonTarif/ButtonTarif";
import { SlideDialog } from "../../Dialog/SlideDialog";
import InfoTips from "./InfoTips";
import { SlideDialogLab } from "../../Dialog/SlideDialogLab";
import React, { useState, useEffect } from "react";

export const HomeCard = ({ setLoadingDialog, formValue }) => {
  return (
    <>
      <CardContent
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* EVE NG :
        <a href="http://10.43.192.129/" target="_blank">
          10.43.192.129
        </a>
        <p>Username : cvpadmin Password : Exaprobe1234 Enable : Exaprobe1234</p> */}
        <div>
          {/* <p>4 Spines</p> */}
          <p color={"white"} variant="subtitle1" component="div">
            Spine 1 :{" "}
            <a href="telnet://10.43.192.129:32777" target="_blank">
              10.43.192.25
            </a>
          </p>

          <p color={"white"} variant="subtitle1" component="div">
            Spine 2 :{" "}
            <a href="telnet://10.43.192.129:32778" target="_blank">
              10.43.192.26
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Spine 3 :{" "}
            <a href="telnet://10.43.192.129:32779" target="_blank">
              10.43.192.27
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Spine 4 :{" "}
            <a href="telnet://10.43.192.129:32780" target="_blank">
              10.43.192.28
            </a>
          </p>
        </div>
        <div>
          {/* <p color={"white"} variant="subtitle1" component="div">
            8 Leafs
          </p> */}
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 1 :{" "}
            <a
              href="telnet://10.43.192.129:32769"
              target="_blank"
            >
              10.43.192.29
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 2 :{" "}
            <a
              href="telnet://10.43.192.129:32770"
              target="_blank"
            >
              10.43.192.30
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 3 :{" "}
            <a
              href="telnet://10.43.192.129:32771"
              target="_blank"
            >
              10.43.192.31
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 4 :{" "}
            <a
              href="telnet://10.43.192.129:32772"
              target="_blank"
            >
              10.43.192.32
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 5 :{" "}
            <a
              href="telnet://10.43.192.129:32773"
              target="_blank"
            >
              10.43.192.33
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 6 :{" "}
            <a
              href="telnet://10.43.192.129:32774"
              target="_blank"
            >
              10.43.192.34
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 7 :{" "}
            <a
              href="telnet://10.43.192.129:32775"
              target="_blank"
            >
              10.43.192.35
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Leaf 8 :{" "}
            <a
              href="telnet://10.43.192.129:32776"
              target="_blank"
            >
              10.43.192.36
            </a>
          </p>
        </div>
        <div>
          {/* <p color={"white"} variant="subtitle1" component="div">
            4 Hosts
          </p> */}
          <p color={"white"} variant="subtitle1" component="div">
            Host 1 :{" "}
            <a
              href="telnet://10.43.192.129:32783"
              target="_blank"
            >
              10.43.192.37
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Host 2 :{" "}
            <a
              href="telnet://10.43.192.129:32781"
              target="_blank"
            >
              10.43.192.38
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Host 3 :{" "}
            <a
              href="telnet://10.43.192.129:32782"
    
            >
              10.43.192.39
            </a>
          </p>
          <p color={"white"} variant="subtitle1" component="div">
            Host 4 :{" "}
            <a
              href="telnet://10.43.192.129:32784"
              target="_blank"
            >
              10.43.192.40
            </a>
          </p>
        </div>
        <SlideDialogLab
          setLoadingDialog={setLoadingDialog}
          formValue={formValue}
        />
        <SlideDialog />
      </CardContent>
    </>
  );
};

export default HomeCard;

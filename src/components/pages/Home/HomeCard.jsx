import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { SlideDialog } from "../../Dialog/SlideDialog";
import { SlideDialogLab } from "../../Dialog/SlideDialogLab";
import { styled } from "@mui/material/styles";
import { links } from "./Managment";
import { Grid } from "@mui/material";

export const HomeCard = ({ setLoadingDialog, formValue }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: '8px',
    gap: '8px' ,
    textAlign: "center",
    borderRadius: "5px",
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center'
    
  }));
  const bubbleStyle = {
    margin: "3.5px 0",
  

    width: "200px",
    height: "50px",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const containerStyle = {

  };

  const cardStyle = {
    borderRadius: "5px",
    padding: "20px",
 
    width: "100%",
    height : '100%',
    margin: "20px auto",
  };

  const cardContentStyle = {
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };


  return (
    <>
    <Grid>
    {/* <Item>IP Managment</Item> */}
    <Grid >
      
      <CardContent style={cardContentStyle}>
        
        <Grid style={containerStyle}>
        
          {links.map((link, index) => (
            <Item key={index} style={bubbleStyle}>
              <p style={{ margin: 0 }} variant="subtitle1" component="div">
                {link.title} :{" "}
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.ip}
                </a>
              </p>
            </Item>
          ))}
        </Grid>
        {/* Uncomment these if you need to use them */}
        {/* <SlideDialogLab
          setLoadingDialog={setLoadingDialog}
          formValue={formValue}
        />
        <SlideDialog /> */}
      </CardContent>
    </Grid>
    </Grid>
    </>
  );
};

export default HomeCard;

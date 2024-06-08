import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { stepsMlag, stepsBgp, stepsVxlan } from "./LabTextData";

export default function StepLab({ lab }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(stepsMlag);

  React.useEffect(() => {
    switch (lab) {
      case "manuel bgp":
        setSteps(stepsBgp);
        break;
      case "manuel vxlan evpn":
        setSteps(stepsVxlan);
        break;
      case "manuel mlag":
      default:
        setSteps(stepsMlag);
    }
    setActiveStep(0);
  }, [lab]);

  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "500px", flexGrow: 0 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h6">{steps[activeStep].label}</Typography>
      </Paper>
      <Typography sx={{ height: "100%", maxWidth: 400, width: "100%", p: 1 }}>
        {steps[activeStep].description}
      </Typography>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          p: 1,
          flexDirection: "column",
        }}
      >
        {steps[activeStep].commandes &&
          steps[activeStep].commandes.map((block, index) => (
            <pre
              key={index}
              sx={{
                flexGrow: 1,
                textAlign: "center",
                margin:
                  index === steps[activeStep].commandes.length - 1
                    ? "0"
                    : "0 0 10px 0",
                lineHeight: "normal",
                whiteSpace: "pre-wrap",
              }}
            >
              {block.join("\n")}
            </pre>
          ))}
      </Box>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  );
}

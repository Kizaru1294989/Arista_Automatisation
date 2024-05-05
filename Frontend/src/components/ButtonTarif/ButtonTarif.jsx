import "./index.scss";
import { Button } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const ButtonTarif = ({ Text, Icon }) => {
  return (
    <Button
      sx={{
        width: "350px",
        height: "60px",
        fontFamily: "DM Sans",
        color: "white",
        textTransform: "none",
        fontSize: "20px",
      }}
      startIcon={<PlayArrowIcon/>}
      className="btn draw-border"
    >
      {Text}
    </Button>
  );
};

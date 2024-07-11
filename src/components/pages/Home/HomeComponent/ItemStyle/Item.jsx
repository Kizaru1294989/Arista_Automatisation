import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: '8px',
    gap: '8px' ,
    textAlign: "center",
    borderRadius: "5px",
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
  }));
  
export const ItemTitle = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: '8px',
    gap: '8px' ,
    textAlign: "center",
    borderRadius: "5px",
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    fontSize : '40px'
  }));
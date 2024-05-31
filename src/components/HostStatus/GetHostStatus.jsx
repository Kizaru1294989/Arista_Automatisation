import DoneIcon from '@mui/icons-material/Done';
import ErrorIcon from '@mui/icons-material/Error'; 
import CircularProgress from '@mui/material/CircularProgress';
  
export const getHostStatus = (value) => {
  console.log(value)
 if (value === true) {
      return <DoneIcon sx={{color : 'green'}} color='green'/>; 
    } else if (value === false) {
      return <ErrorIcon sx={{color : 'red'}} color='red'/>; 
    } else  {
      return <CircularProgress size={25} />; 
    }
  }
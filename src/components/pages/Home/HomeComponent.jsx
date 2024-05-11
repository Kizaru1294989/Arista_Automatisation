import * as React  from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { ButtonTarif } from '../../ButtonTarif/ButtonTarif';
import { useState } from 'react';
import ButtonHomePage from '../../ButtonHomePage/ButtonHomePage';
import HomeCard from './HomeCard';
import { Loading } from '../../loading/Loading';


export default function MediaControlCard() {
  const theme = useTheme();
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(null);

  const postData = async () => {
    try {
      const intValue = 42; // Par exemple, vous pouvez utiliser n'importe quelle valeur entière ici
      const res = await fetch('http://127.0.0.1:5000/python/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ intValue }) // Convertit l'entier en JSON pour l'envoyer
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <>
    <Grid sx={{ display: 'flex'  , backgroundColor : '#2d3436', backgroundImage : 'linear-gradient(315deg, #2d3436 0%, #000000 74%)'}}>
      <Box sx={{  display: 'flex', flexDirection: 'column' }}>
        <HomeCard/>
        <Box sx={{ display: 'flex', alignItems: 'center' ,justifyContent : 'center' , margin : '125px' , pl: 1, pb: 1 }}>
        
          <ButtonTarif onClick={postData} Text={"Start"}/>
          {error && <p>Error: {error}</p>}
          {response && <p>Response from Server: {response}</p>}
  

  
        </Box>
        
      </Box>
     

    </Grid>
    <Grid className="card-right" >
    <Grid className="schema">

      
    </Grid>

</Grid>
    <Grid>

    </Grid>
    </>
  );
}

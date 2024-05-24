import * as React  from 'react';
import { Grid, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import YourImage from '../../../assets/img/MLAG_schema.png';
import HomeCard from './HomeCard';


export default function MediaControlCard() {





  return (
    <>
    <Grid sx={{ display: 'flex'  , backgroundColor : '#2d3436', backgroundImage : 'linear-gradient(315deg, #2d3436 0%, #000000 74%)' , width : '300px'}}>
      <Box sx={{  display: 'flex', flexDirection: 'column' }}>
        <HomeCard/>
        <Box sx={{ display: 'flex', alignItems: 'center' ,justifyContent : 'center' , margin : '125px' , pl: 1, pb: 1 }}>
        
   
  

  
        </Box>
        
      </Box>
     

    </Grid>
    <Grid  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Card sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid>
              <img src={YourImage} alt="Votre Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

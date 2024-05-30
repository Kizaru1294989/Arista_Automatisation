import * as React  from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent } from '@mui/material';
import MLAG from '../../../assets/img/MLAG_schema.png';
import HomeCard from './HomeCard';

export default function MediaControlCard({lab,status , setLoadingDialog}) {
  // console.log(labStatus)
  // let parsedLabStatus = JSON.parse(labStatus.labStatus.replace(/'/g, '"'));
  // let lab = Object.keys(parsedLabStatus)[0];
  // let status = parsedLabStatus[lab];
  
  console.log(lab); 
  console.log(status);
  return (
    <>
    <Grid sx={{ display: 'flex'  , backgroundColor : '#2d3436', backgroundImage : 'linear-gradient(315deg, #2d3436 0%, #000000 74%)' , width : '300px'}}>
      <Grid sx={{  display: 'flex', flexDirection: 'column' }}>
        <HomeCard setLoadingDialog={setLoadingDialog}/>
        <Grid sx={{ display: 'flex', alignItems: 'center' ,justifyContent : 'center' , margin : '125px' , pl: 1, pb: 1 }}>  
        </Grid>
      </Grid>
    </Grid>
    
    <Grid  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'  }}>

        <Card >
          
          <CardContent sx={{ backgroundColor : 'black'}}>
          <Grid>
              <h1 style={{ color : 'white'}}>Lab Arista étape I : MLAG</h1>
             
            </Grid>
            <Grid>
              <h1 style={{ color : 'white'}}>Etape actuelle : {lab + " LAB " + status}</h1>
              <img src={MLAG} alt="Votre Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

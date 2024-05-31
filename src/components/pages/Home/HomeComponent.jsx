import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent, Button } from '@mui/material';
import MLAG from '../../../assets/img/mlag.png';
import BGP from '../../../assets/img/bgp.png';
import HomeCard from './HomeCard';

const labs = [
  { name: 'MLAG', image: MLAG, title: 'Lab Arista étape I : MLAG' },
  { name: 'BGP', image: BGP, title: 'Lab Arista étape II : BGP' },
];

export default function MediaControlCard({ lab, status, setLoadingDialog, formValue }) {
  const [currentLabIndex, setCurrentLabIndex] = useState(0);

  const handleNextLab = () => {
    setCurrentLabIndex((prevIndex) => (prevIndex + 1) % labs.length);
  };

  const handlePrevLab = () => {
    setCurrentLabIndex((prevIndex) => (prevIndex - 1 + labs.length) % labs.length);
  };

  return (
    <>
      <Grid sx={{ display: 'flex', backgroundColor: '#2d3436', backgroundImage: 'linear-gradient(315deg, #2d3436 0%, #000000 74%)', width: '300px' }}>
        <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
          <HomeCard setLoadingDialog={setLoadingDialog} formValue={formValue} />
          <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '125px', pl: 1, pb: 1 }}>
          </Grid>
        </Grid>
      </Grid>

      <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Card>
          <CardContent sx={{ backgroundColor: 'black' }}>
            <Grid>
              <h1 style={{ color: 'white' }}>{labs[currentLabIndex].title}</h1>
            </Grid>
            <Grid>
              <h1 style={{ color: 'white' }}>Etape actuelle : {lab + " LAB " + status}</h1>
              <img src={labs[currentLabIndex].image} alt="Lab Image" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handlePrevLab}>
                Lab Précédent
              </Button>
              <Button variant="contained" color="primary" onClick={handleNextLab}>
                Lab Suivant
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

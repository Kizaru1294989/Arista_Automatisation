import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Loading } from './Loading';

export default function SimpleBackdrop({over , setOver, start, setStart, title, setOvererror, response, handleAutomatiqueDialogClose , overerror }) {
  useEffect(() => {
    if (response == true) {
      setOver(true);
      handleAutomatiqueDialogClose();
    }
    if (response == false) {
      setOvererror(true);
      handleAutomatiqueDialogClose();
    }
  }, [response, setStart, handleAutomatiqueDialogClose]);

  return (
    <div>
      <Button onClick={() => setStart(true)}>{title}</Button>
      {start && !over && !overerror &&  (
        <Backdrop
          sx={{  flexDirection : 'column', alignItems : 'center' ,color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}

        >
          <h3 >Cela peut prendre quelques minutes, merci de patienter pendant l'installation du Lab</h3>
          <Loading />
        </Backdrop>
      )}

    </div>
  );
}

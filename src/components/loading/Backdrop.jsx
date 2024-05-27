import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

export default function SimpleBackdrop({ title, SendToFlask, response }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    SendToFlask(title);
  };

  useEffect(() => {
    if (response) {
      setOpen(false);
    }
  }, [response]);

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <h3>Cela peut prendre quelques minutes, merci de patienter pendant l'installation du Lab</h3>
        <CircularProgress style={{ marginLeft: '30px' }} color="inherit" />
      </Backdrop>
    </div>
  );
}

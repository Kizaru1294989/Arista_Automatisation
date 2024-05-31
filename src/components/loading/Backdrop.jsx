import * as React from 'react';
import { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import { getHostStatus } from '../HostStatus/GetHostStatus';
import { DeviceStatus } from '../HostStatus/DeviceStatus';

export default function SimpleBackdrop({over , setOver, start, setStart, title, formValue, response, handleAutomatiqueDialogClose , setLoadingDialog }) {
  useEffect(() => {
    setLoadingDialog(true)
    if (response) {
      setOver(true);
      handleAutomatiqueDialogClose();
      console.log("lab finis");
    }
  }, [response, handleAutomatiqueDialogClose]);

  return (
    <div>
      <Button onClick={() => setStart(true)}>{title}</Button>
      {start && !over && (
        <Backdrop
          sx={{ flexDirection : 'column', alignItems : 'center', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <DeviceStatus formValue={formValue} getHostStatus={getHostStatus}/>
          {/* <Loading /> */}
        </Backdrop>
      )}
    </div>
  );
}

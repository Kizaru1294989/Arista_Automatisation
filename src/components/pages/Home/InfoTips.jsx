import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function InfoTips() {
  return (
    <Tooltip title="mot de passe : e">
      <IconButton color='white'>
        <AccountCircleIcon color='white'/>
      </IconButton>
    </Tooltip>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { InstructionsData } from './InstructionsData/InstructionsData';

export const ManualDialog = ({ lab, instructions, setInstructions, currentLabIndex , open ,setOpen}) => {

    return <>
    <InstructionsData
    open={open}
    setOpen={setOpen}
    lab={lab}
    />
    </>;
};

export default ManualDialog;

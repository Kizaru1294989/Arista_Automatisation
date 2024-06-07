
import { Backdrop } from "@mui/material"
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentText } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import StepLab from "./StepLab";

export const InstructionsData = ({open,setOpen,lab}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose} // Properly bind the close handler
            aria-describedby="alert-dialog-slide-description"
        >
            <h1 style={{display : 'flex' , justifyContent : 'center'}}>{lab}</h1>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
         <StepLab lab={lab}/>
        </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Fermer</Button>
            </DialogActions>
        </Dialog>

        </>
    );
}
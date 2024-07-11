import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";


export const SuccessComponent = ({dialog , lab , handleClose}) => {

    return (
        <Backdrop
        sx={{
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={dialog}
      >
        <Stack sx={{ width: "20%" }} spacing={2}>
          <Alert severity="success">
            <AlertTitle>Succès</AlertTitle>
            LAB {lab} terminé —{" "}
            <strong>l'installation du lab {lab} est réussie!</strong>
          </Alert>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ mt: 2 }}
          >
            Fermer
          </Button>
        </Stack>
      </Backdrop>

    )
}
import Backdrop from "@mui/material/Backdrop";
import { DeviceStatus } from "../HostStatus/DeviceStatus";


export const StartComponent = ({dialog , lab , handleClose , formValue , getHostStatus}) => {

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
        <DeviceStatus
        formValue={formValue}
        getHostStatus={getHostStatus}
        />
        </Backdrop>
    )
}


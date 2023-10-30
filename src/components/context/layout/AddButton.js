import * as React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import BasicCard from "./BasicCard";
export default function AddButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    }

    return (
        <div>
            <React.Fragment key={"buttonn"}>
                <Button
                    onClick={handleOpen}
                    variant="contained"
                    disableElevation
                    sx={{ background: "#007A9B", "&:hover": { background: "#007A9B" } }}
                >
                    <AddIcon />
                    Añadir
                </Button>
                <Backdrop
                    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <BasicCard onCancel={handleCancel} />
                </Backdrop>
            </React.Fragment>
        </div>
    );
}
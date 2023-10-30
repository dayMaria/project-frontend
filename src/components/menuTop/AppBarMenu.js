import * as React from "react";
import {
    AppBar,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import Link from "next/link";
import TemporaryDrawer from "./TemporaryDrawer";


export default function AppBarMenu() {
    return (
        <Stack direction='row' sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center' }} >
            <AppBar position="static" sx={{ background: '#007A9B' }}>
                <Toolbar>
                    <Button color="inherit"><TemporaryDrawer /></Button>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        aica+
                    </Typography>
                    <Button color="inherit"><Link href='/'><h3 style={{ color: 'white' }}>Página principal</h3></Link></Button>
                </Toolbar>
            </AppBar>
        </Stack>
    );
}
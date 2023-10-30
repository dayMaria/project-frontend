import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EastIcon from '@mui/icons-material/East';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link href='/caseStudy'>
                    <ListItemButton>
                        <ListItemText primary='Estudios de casos' />
                        <ListItemIcon >
                            <EastIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>

                <Link href='/context'>
                    <ListItemButton>
                        <ListItemText primary='Contextos' />
                        <ListItemIcon >
                            <EastIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>

                <Link href='/analysisUnit'>
                    <ListItemButton>
                        <ListItemText primary='Unidades de análisis' />
                        <ListItemIcon >
                            <EastIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>

                <Link href='/typeEvidence'>
                    <ListItemButton>
                        <ListItemText primary='Tipos de evidencia' />
                        <ListItemIcon >
                            <EastIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </Link>
                <Divider />
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key='left'>
                <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{ color: '#FEFFFF ' }} /></Button>
                <Drawer
                    anchor='left'
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                >
                    {list('left')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
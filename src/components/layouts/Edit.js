import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
export default function EditContext() {
    const [state, setState] = React.useState({
        left: true,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><EditIcon sx={{ color: '#717C80' }} /></Button>
        </div>
    );
}
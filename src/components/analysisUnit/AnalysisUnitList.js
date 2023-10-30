import Table from '../layouts/Table'
import SearchOption from '../menuTop/SearchOption'
import { Stack } from '@mui/material'

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
export default function AnalysisUnit() {
    return (
        <div>
            <Stack direction='row' sx={{ alignItems: 'center' }} >
                <h1 style={{ color: '#0A5959', marginLeft: 15 }}>Listado de unidades de análisis</h1>
                <div style={{ marginLeft: 657, marginRight: 50 }}>
                    <SearchOption />
                </div>
                <Button variant="contained" disableElevation sx={{ background: '#007A9B', '&:hover': { background: '#007A9B' } }}>
                    <AddIcon />
                    Añadir
                </Button>
            </Stack>
            <div style={{ marginLeft: 15, marginRight: 15, marginTop: -10 }}>
                <Table />
            </div>
        </div>
    );
}
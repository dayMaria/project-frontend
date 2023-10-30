import Table from '../layouts/Table'
import SearchOption from '../menuTop/SearchOption'
import { Stack } from '@mui/material'
import AddButton from './layout/AddButton'
export default function ContextList() {
    return (
        <div>
            <Stack direction='row' sx={{ display: { xs: "none", sm: "flex" }, alignItems: 'center', marginTop: 3 }} spacing={1}>
                <h1 style={{ color: '#0A5959', marginLeft: 15 }}>Listado de contextos</h1>
                <div style={{ marginLeft: 790, marginRight: 50 }}>
                    <SearchOption />
                </div>
                <AddButton />
            </Stack>
            <div style={{ marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                <Table />
            </div>
        </div>
    )
}
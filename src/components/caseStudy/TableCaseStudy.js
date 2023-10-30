import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Edit from '../layouts/Edit'
import Visualice from '../layouts/Visualice'
import { Stack } from '@mui/material'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#007A9B',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#ECF7FA',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, commitDate, endDate) {
    return { name, commitDate, endDate };
}

const rows = [
    createData('Frozen yoghurt', '15-02-2021', '25-08-2023'),
    createData('Ice cream sandwich', '15-02-2021', '25-08-2023'),
    createData('Eclair', '15-02-2021', '25-08-2023'),
    createData('Cupcake', '15-02-2021', '25-08-2023'),
    createData('Gingerbread', '15-02-2021', '25-08-2023'),
];


export default function CustomizedTables() {
    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Fecha inicio</StyledTableCell>
                        <StyledTableCell>Fecha fin</StyledTableCell>
                        <StyledTableCell align="center">Acciones</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell aling='center'>{row.commitDate}</StyledTableCell>
                            <StyledTableCell aling='center'>{row.endDate}</StyledTableCell>
                            <StyledTableCell align="center" >
                                <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={1}>
                                    <Visualice /><Edit />
                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
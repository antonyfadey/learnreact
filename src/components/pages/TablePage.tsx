import React, { useState } from 'react';
import '../styles/TablePage.css'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TextField, Button } from '@mui/material';
import store from '../../store'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSelector } from 'react-redux';

interface Column {
    id: 'name' | 'shortName' | 'population';
    label: string;
    minWidth?: number;
    align?: 'left';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'shortName', label: 'ShortName', minWidth: 170 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 100,
        align: 'left',
        format: (value: number) => value.toLocaleString('en-US'),
    }
];
const state = store.getState();
const selectRows = state => state.countries;

const TablePage = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [filter, setFilter] = useState("");
    const rows = useSelector(selectRows);
    const navigate = useNavigate();

    function onNavBack() {
        navigate('/', { replace: true });
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    return (
        <div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Button variant="outlined" startIcon={<ArrowBackIosIcon />} onClick={onNavBack} className='button-back'>
                    Back
                </Button>
                <TextField
                    fullWidth
                    id="filter"
                    name="filter"
                    label="Filter"
                    type="filter"
                    value={filter}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFilter(event.target.value);
                    }}
                    margin='dense'
                />
                <TableContainer sx={{ maxHeight: 440 }} >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, (page + 1) * rowsPerPage).filter(country => {
                                    return country.name.toLowerCase().includes(filter.toLowerCase());
                                })
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.shortName}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={state.countries.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </div>
    );
};

export default TablePage;

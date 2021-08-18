import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import styled from 'styled-components';
const UsersComponentWrapper = styled.div``;
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});
const UsersComponent = ({ data }) => {
    const classes = useStyles();
    return (
        <TableBody>
            <StyledTableRow className="row m-0">
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.id}
                </StyledTableCell>
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.name}
                </StyledTableCell>
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.username}
                </StyledTableCell>
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.email}
                </StyledTableCell>
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.phone}
                </StyledTableCell>
                <StyledTableCell className="col-2" component="th" scope="row">
                    {data.website}
                </StyledTableCell>
            </StyledTableRow>
        </TableBody>
    );
};

export default UsersComponent;
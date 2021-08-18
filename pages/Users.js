import React, { useEffect } from 'react';
import {  useSelector } from 'react-redux';
import setUsers  from '../Redux/Action/usersAction';
import UsersComponent from '../Components/UserComponents/UsersComponent';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from "styled-components";
const UsersWrapper = styled.div``
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
const Users = () => {
  const classes = useStyles();
  useEffect(() => {
    setUsers()
  }, [])
  const data = useSelector(state => state.userReducer.data)
  console.log(useSelector(state => state.userReducer.data));
  return (
    <UsersWrapper>
      <h1>Users</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className="row">
              <StyledTableCell className="col-2">id</StyledTableCell>
              <StyledTableCell className="col-2">Name</StyledTableCell>
              <StyledTableCell className="col-2">UserName</StyledTableCell>
              <StyledTableCell className="col-2">Email</StyledTableCell>
              <StyledTableCell className="col-2">Phone</StyledTableCell>
              <StyledTableCell className="col-2">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          {data.map((v, i) => {
            return <UsersComponent key={v.id} data={v} />;
          })}
        </Table>
      </TableContainer>
    </UsersWrapper>
  );
};

export default Users;
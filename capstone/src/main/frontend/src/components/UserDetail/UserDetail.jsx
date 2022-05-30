import React, { useEffect, useState, Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import { Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';

import useStyles from './styles';

const UserDetail = ({ user }) => {
    const classes = useStyles();

    
    const [dev, setDev] = useState([{}]);
    const devurl = `http://localhost:8080/api/users/${user.id}/devices`

    function getData() {
        axios.get(devurl)
            .then(function(response) {
                setDev(response.data);
            }).catch(function(error) {
                console.log(error);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={classes.tablebody}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">ID</TableCell>
                        <TableCell align="right">{user.id}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">연락처</TableCell>
                        <TableCell align="right">{user.phoneNumber}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">이메일</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">단말기</TableCell>
                        <TableCell align="right">{dev.id}</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserDetail;
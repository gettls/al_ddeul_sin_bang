import React, { useEffect, useState, Component } from 'react';
import Modal from 'react-modal';

import { Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';

import useStyles from './styles';

const GuardDetail = ({guard}) => {
    const classes = useStyles();

    return (
        <div className={classes.tablebody}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">이름</TableCell>
                        <TableCell align="right">{guard.username}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">ID</TableCell>
                        <TableCell align="right">{guard.id}</TableCell>
                    </TableRow>
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">연락처</TableCell>
                        <TableCell align="right">{guard.phoneNumber}</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    );
}

export default GuardDetail;
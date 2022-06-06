import React, { useEffect, useState, Component } from 'react';
import Modal from 'react-modal';

import { Table, TableHead, TableRow, TableCell, TableContainer, Paper, TableBody } from '@material-ui/core';

import useStyles from './styles';

const TownDetail = ({town}) => {
    const classes = useStyles();

    return (
        <div className={classes.tablebody}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableRow key={town.devuser} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">ID</TableCell>
                        <TableCell align="right">{town.id}</TableCell>
                    </TableRow>
                    <TableRow key={town.devuser} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">위도</TableCell>
                        <TableCell align="right">{town.location.latitude}</TableCell>
                    </TableRow>
                    <TableRow key={town.devuser} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">경도</TableCell>
                        <TableCell align="right">{town.location.longitude}</TableCell>
                    </TableRow>
                    <TableRow key={town.devuser} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">긴급 호출</TableCell>
                        <TableCell align="right">00</TableCell>
                    </TableRow>
                    <TableRow key={town.devuser} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">통신 장애</TableCell>
                        <TableCell align="right">00</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TownDetail;
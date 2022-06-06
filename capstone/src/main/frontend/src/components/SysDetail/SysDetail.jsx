import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { CssBaseline, Grid, Button, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

import useStyles from './styles';

const SysInfo = ({villcnt, usercnt}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <div className={classes.container}> 
                <div>
                    <img src={require("../../static/images/assb-logo.png")}
                        className={classes.logo}alt="assb-logo" />
                </div>
                <div className={classes.table}>
                    <h3 style={{color:"#3F3F3F"}}>&nbsp;&nbsp;&#127795;&nbsp;마을 관리 현황</h3>
                    
                    <TableContainer component={Paper} className={classes.tablebox}>
                        <Table sx={{ minWidth: 100 }} className={classes.tablebody}>
                            <TableRow>
                                <TableCell component="th" scope="row">관리 마을</TableCell>
                                <TableCell align="right">{villcnt}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">사용자</TableCell>
                                <TableCell align="right">{usercnt}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">긴급 호출</TableCell>
                                <TableCell align="right">00</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">통신 장애</TableCell>
                                <TableCell align="right">00</TableCell>
                            </TableRow>
                        </Table> 
                    </TableContainer>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button>more</Button>
                </div>
            </div>
        </>
    );
}

export default SysInfo;
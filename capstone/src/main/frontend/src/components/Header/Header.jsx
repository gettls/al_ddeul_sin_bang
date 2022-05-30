import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Button, Input, IconButton } from '@material-ui/core';
import { Search, Home } from '@material-ui/icons';

import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <AppBar style={{background: '#78C46F'}}>
            <Toolbar>
                <IconButton color="action" aria-label="add" component="span"
                    className={classes.closebtn} onClick={() => navigate('/')}>
                    <Home fontSize="medium" color="disabled" />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    알쓸신방 관리자&nbsp;
                </Typography>
                <Button variant="text" className={classes.logoutButton} 
                    onClick={() => alert('logout')}>logout</Button>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <Search />
                    </div>
                    <InputBase placeholder="마을 검색..." classes={{root: classes.inputRoot, input: classes.inputInput }} />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
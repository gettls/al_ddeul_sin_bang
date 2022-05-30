import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const TownUsers = ({users, id}) => {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
           <div className={classes.container} style={{margin: '10px', background: '#FFFFFF'}}>
                <Grid container spacing={1} className={classes.list}>
                    {users?.map((user, i) => (
                        <Grid item key={i} xs={12}>
                            <Button onClick={() => navigate("/user", {state: user})}>{user.username} [ID: {user.id}]</Button>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    );
}

export default TownUsers;
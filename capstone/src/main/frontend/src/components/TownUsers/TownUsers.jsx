import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button, InputBase } from '@material-ui/core';

import useStyles from './styles';

const TownUsers = ({ users }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [search, setSearch] = useState([{}]);
            
    // const axios = require('axios');
    // const searchurl = 'http://localhost:8080/api/users/search';

    // const [users, setUsers] = useState([{}]);
    // setUsers(user);

    // const onChange = (e) => {
    //     setSearch(e.target);
    // }

    // const onKeyPress = (e) => {
    //     if(e.key == 'Enter') {    
    //         function getData() {
    //             axios.get(searchurl)
    //                 .then(function(response) {
    //                     setUsers(response.data);
    //                 }).catch(function(error) {
    //                     console.log(error);
    //             });
    //             e.target.value = '';
    //         }  
    //     } 
    // }

    return (
        <>
           <div className={classes.container} style={{margin: '10px', background: '#FFFFFF'}}>
                <Grid container spacing={1} className={classes.list}>
                    {/* <Grid item xs={12}>
                        <InputBase classes={{root: classes.inputRoot, input: classes.inputInput }}
                            onChange={onChange} placeholder="  유저 검색..." //onKeyPress={onKeyPress}  
                        />
                    </Grid>  */}
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
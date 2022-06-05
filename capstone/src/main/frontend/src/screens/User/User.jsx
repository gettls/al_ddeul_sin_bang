import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { CssBaseline, Grid, Button, IconButton, Input, Tabs, Tab, Box, Typography} from '@material-ui/core';
import { AddCircleRounded, Close, Settings, Delete } from '@material-ui/icons';

import Header from '../../components/Header/Header';
import UserDetail from '../../components/UserDetail/UserDetail';
import GuardDetail from '../../components/GuardDetail/GuardDetail';
import Monitoring from '../../components/Monitoring/Monitoring';
import useStyles from './styles';

const User = () => {
    const classes = useStyles();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [ville, setVille] = useState([{}]);
    const villurl = `http://localhost:8080/api/users/${state.id}/villages`
    const [guard, setGuard] = useState([{}]);
    const guardurl = `http://localhost:8080/api/users/${state.id}/guardian`

    function getData() {
        axios.get(villurl)
            .then(function(response) {
                setVille(response.data);
            }).catch(function(error) {
                console.log(error);
        });

        axios.get(guardurl)
            .then(function(response) {
                setGuard(response.data);
            }).catch(function(error) {
                console.log(error);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    const cheifurl = `http://localhost:8080/api/users/admins/${state.id}`;
    function setChief() {
        axios.put(cheifurl)
            .then(function(response) {
                navigate('/');
                alert('마을 이장이 등록되었습니다.');
            }).catch(function(error) {
                console.log(error);
        });
    }
    
    return (
        <div id="user" style={{margin: '40px', paddingTop: '80px'}}>
            <CssBaseline />
            <Header />

            <h1 style={{color: "#555555"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &lt;{ville.nickname}&gt; {ville.city} {ville.state} {ville.town}  &#128034;&nbsp;&nbsp;&nbsp;&nbsp;
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 유저 : {state.username} &#127804;
            </h1>
            <div>
                <Grid container spacing={1} style={{width: '100%', margin: '40px'}}>
                    <Grid item xs={12} md={6} className={classes.info}>
                        <h2 style={{color: "#555555"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128100;&nbsp;
                            유저 정보
                        </h2>
                        <UserDetail user={state}/><br/>
                    </Grid>
                    {guard?.map((gd, i) => (
                        <>
                            <Grid item key={i} xs={12} md={6} className={classes.users}>
                                <h2 style={{color: "#555555"}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#127968;&nbsp;
                                    보호자 정보
                                </h2>
                                <GuardDetail guard={gd}/><br/>
                            </Grid><br/>
                            <Grid item xs={12} md={12} className={classes.users} style={{width: '80%'}}>
                                <h2 style={{color: "#555555"}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128161;&nbsp;
                                    상태 데이터
                                </h2>
                                <Monitoring />
                            </Grid>
                        </>
                    ))}
                </Grid>
            </div>

            {!ville.admin && 
                <div>
                    <br/><br/><Button color="error" size="small" variant="contained" onClick={()=>setChief()} className={classes.cheifbtn}>
                        <h3 className={classes.cheiftxt}>이장 등록</h3>
                    </Button>
                </div>
            }
        </div>
    );
}

export default User;
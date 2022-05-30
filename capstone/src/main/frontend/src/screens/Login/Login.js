import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { CssBaseline, Grid } from '@material-ui/core';
import  './Login.css';

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();
   
    const signIn = (e) => {
        axios.post('http://localhost/api/login', {
            params:{
                email: emailRef,
                password: passwordRef
            },
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
            // navigate('/login');
        });
    }

    return (
        <div className="body" style={{background: '#DFDFDF', height: "150vh"}}>
            <CssBaseline />
            <Grid container spacing={3} style={{ width: '100%' }} >
                <Grid item xs={1} md={6} id="logo">
                    <img src={require("../../static/images/assb-logo.png")} id="logo" alt="assb-logo" />
                </Grid>
                <Grid item xs={12} md={6} id="input">
                    <form id="loginform">
                        <h1 id="loginh1" style={{color: "#EEEEEE"}}>&#128204;&nbsp;알쓸신방 관제 페이지</h1>
                        <input ref={emailRef} type="text" placeholder="  Email" />
                        <input ref={passwordRef} type="password" placeholder="  Password" />
                        <button onClick={signIn} id="loginbutton">LOG IN &gt;</button>
                    </form>
                </Grid>
            </Grid> 
        </div>
    );
}

export default Login;
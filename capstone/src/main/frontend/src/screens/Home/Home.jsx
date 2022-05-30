import React, { useEffect, useState, Component } from 'react';
import Modal from 'react-modal';
import axios from "axios";

import { CssBaseline, Grid, Button, IconButton, Input } from '@material-ui/core';
import { AddCircleRounded, Close } from '@material-ui/icons';

import Header from '../../components/Header/Header';
import SysDetail from '../../components/SysDetail/SysDetail';
import TownList from '../../components/TownList/TownList';

import useStyles from './styles';

function Home() {
    const classes = useStyles();

    const [villages, setVillages] = useState([{}]);
    const [users, setUsers] = useState([{}]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const axios = require('axios');
    const villurl = 'http://localhost:8080/api/villages';
    const userurl = 'http://localhost:8080/api/users';

    function getData() {
        axios.get(villurl)
            .then(function(response) {
                setVillages(response.data);
            }).catch(function(error) {
                console.log(error);
        });
        axios.get(userurl)
            .then(function(response) {
                setUsers(response.data);
            }).catch(function(error) {
                console.log(error);
        });
    }

    useEffect(() => {
        getData();
    }, [])

    const [inputs, setInputs] = useState({
        inNickname: '', inState: '', inCity: '', inTown: '', inlon: '', inlat: ''
    }, []);

    const { inNickname, inState, inCity, inTown, inlon, inlat } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        axios.post(villurl, {
            nickname: inNickname,
            state: inState,
            city: inCity,
            town: inTown,
            latitude: inlat,
            longitude: inlon
        })
        .then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });

        setInputs({inNickname: '', inState: '', inCity: '', inTown: '', inlon: '', inlat: '' });
        setModalIsOpen(false);
        getData();

        window.location.href='/';
    };


    return (
        <div id="home" style={{marginTop: '120px'}} >
            <CssBaseline />
            <Header />

            <div>
                <Grid container spacing={2} style={{width: '100%', margin: '20px'}}>
                    <Grid item xs={12} sm={12} md={5} className={classes.layout}>
                        <SysDetail villcnt={villages.length} usercnt={users.length}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} className={classes.townlist}>
                        <h2 style={{color: "#555555"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#127968;&nbsp;
                            관리 마을 목록
                        </h2>
                        <TownList villages={villages}/>
                    </Grid>

                </Grid>
                <label htmlFor="icon-button-file" title="마을 추가">
                    <IconButton color="disabled" aria-label="add" component="span" id="add-btn" 
                        className={classes.addtown} onClick={() => setModalIsOpen(true)}>
                        <AddCircleRounded fontSize="large" color="disabled" />
                    </IconButton>
                    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                        style={{
                            overlay: {
                                position: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                , top: '0', left: '0', right: '0', bottom: '0'
                            },
                            content: {
                                position: 'fixed', top: '200px', left: '80px'
                                , width: '300px', height: '370px', backgroundColor: 'rgba(196, 196, 196, 0.85)'
                                , border: 'solid', borderRadius: '10px', borderColor: '#000000',
                            }
                        }}>
                        <div>
                            <form>
                                <h2 className={classes.title}> &nbsp;&#128190; 관리 마을 추가</h2>
                                <input className={classes.input} onChange={onChange} name="inState" value={inState} placeholder="  시 State" />
                                <input className={classes.input} onChange={onChange} name="inCity" value={inCity} placeholder="  구 City" />
                                <input className={classes.input} onChange={onChange} name="inTown" value={inTown} placeholder="  동 Town" />
                                <input className={classes.input} onChange={onChange} name="inNickname" value={inNickname} placeholder="  마을명 Nickname" /> 
                                <input className={classes.input} onChange={onChange} name="inlon" value={inlon} placeholder="  경도 Longitude" />
                                <input className={classes.input} onChange={onChange} name="inlat" value={inlat} placeholder="  위도 Latitude" /><br/>
                                <Button size="small" variant="contained" color="disabled" onClick={onReset} className={classes.inputbtn}>정보 입력</Button>
                            </form>
                        </div>
                        <IconButton color="action" aria-label="add" component="span"
                            className={classes.closebtn} onClick={() => setModalIsOpen(false)}>
                            <Close fontSize="large" color="action" />
                        </IconButton>
                    </Modal>
                </label>
            </div>
        </div>
    );
}

export default Home;
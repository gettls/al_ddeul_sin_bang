import React, { useEffect, useState, Component } from 'react';
import { useLocation } from "react-router";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';

import { CssBaseline, Grid, Button, IconButton, Input, Tabs, Tab, Box, Typography} from '@material-ui/core';
import { AddCircleRounded, Close, Settings, Delete } from '@material-ui/icons';

import Header from '../../components/Header/Header';
import TownUsers from '../../components/TownUsers/TownUsers';
import TownDetail from '../../components/TownDetail/TownDetail';
import Weather from '../../components/Weather/Weather';
import useStyles from './styles';

const Town = () => {
    const classes = useStyles();
    const { state } = useLocation();
    const navigate = useNavigate();

    const [users, setUsers] = useState([{}]);
    const [admin, setAdmin] = useState([{}]);
    
    const [weather, setWeather] = useState({
        icon: '', descp: '', temp: '', humidity: '', press: ''
    });
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const apiKey = "0ed94acfdf3d964a63cef8ef450e21f6";
    const userurl = `http://localhost:8080/api/villages/${state.id}/except/guardians`;
    const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lon=${state.location.latitude}&lat=${state.location.longitude}&appid=${apiKey}`;

    function getUsers() {
        axios.get(userurl)
            .then(function(response) {
                setUsers(response.data);
            }).catch(function(error) {
                console.log(error);
        });
        axios.get(weatherurl)
            .then(function(response) {
                setWeather({
                    icon: response.data.weather[0].icon,
                    descp: response.data.weather[0].description,
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    press: response.data.main.pressure,
                });
            }).catch(function(error) {
                console.log(error);
        });
        setAdmin(state.admin);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div id="town" style={{margin: '40px', paddingTop: '60px'}} >
            <CssBaseline />
            <Header />

            <h1 style={{color: "#555555"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                &lt; {state.nickname} &gt; {state.city} {state.state} {state.town} &#128034;
            </h1> 
            <h4 style={{color: "#989898"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                마을 이장:  {admin && <>{admin.username} {admin.phoneNumber} [ID: {admin.id}]</>}
            </h4>
            
            <div>
                <Grid container spacing={2} style={{width: '100%', margin: '20px'}}>
                    <Grid item xs={12} sm={12} md={3} className={classes.weather} style={{margin: '20px'}}>
                        <Weather weather={weather}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.info}>
                        <h2 style={{color: "#555555"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#127968;&nbsp;
                            마을 정보
                        </h2>
                        <TownDetail town={state}/><br/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.users}>
                        <h2 style={{color: "#555555"}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#128100;&nbsp;
                            마을 주민 목록
                        </h2>
                        <TownUsers users={users}/>
                    </Grid>
                </Grid>
                <label htmlFor="icon-button-file" >
                    { admin &&
                        <>
                            <IconButton color="disabled" aria-label="add" component="span" id="add-btn" 
                                className={classes.editbtn} onClick={() => setModalIsOpen(true)}>
                                <Settings fontSize="large" color="disabled" />
                            </IconButton>
                        </>
                    }
                    <IconButton color="error" aria-label="add" component="span" id="add-btn" 
                        className={classes.deletebtn} onClick={() => {
                            const tmp = state.nickname;
                            axios.delete(`http://localhost:8080/api/villages/${state.id}`)
                                .then(function (response) {
                                    navigate('/');
                                    alert(`${tmp}이(가) 삭제되었습니다.`);
                                })
                                .catch(function (error) {
                                    console.log(error);
                            });
                        }}>
                        <Delete fontSize="large" />
                    </IconButton>
                    { admin &&
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    position: 'fixed', backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                    , top: '0', left: '0', right: '0', bottom: '0'
                                },
                                content: {
                                    position: 'fixed', top: '200px', left: '80px'
                                    , width: '380px', height: '170px', backgroundColor: 'rgba(196, 196, 196, 0.85)'
                                    , border: 'solid', borderRadius: '10px', borderColor: '#000000',
                                }
                            }}>
                            <div>
                                <form>
                                    <h2 className={classes.title}> &nbsp; 마을 이장 : [ID {admin.id}] {admin.username}</h2>
                                    <IconButton color="error" aria-label="add" component="span" id="add-btn" 
                                        className={classes.cheifdelete} onClick={() => {
                                            const tmp = admin.username;
                                            axios.delete(`http://localhost:8080/api/villages/${state.id}/admins`)
                                                .then(function (response) {
                                                    navigate('/');
                                                    alert(`마을 이장이 삭제되었습니다.`);
                                                    setModalIsOpen(false);
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                            });
                                        }}>
                                        <Delete fontSize="large" />
                                    </IconButton>
                                </form>
                            </div>
                            <IconButton color="action" aria-label="add" component="span"
                                className={classes.closebtn} onClick={() => setModalIsOpen(false)}>
                                <Close fontSize="large" color="action" />
                            </IconButton>
                        </Modal>
                    }
                </label>
            </div>
        </div>
    );
}

export default Town;
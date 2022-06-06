import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Grid, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const TownList = ({word}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    let flag = true;

    const [villages, setVillages] = useState([{}]);
    const [search, setSearch] = useState([{}]);

    const axios = require('axios');
    const villurl = 'http://localhost:8080/api/villages';

    function getData() {
        axios.get(villurl)
            .then(function(response) {
                setVillages(response.data);
            }).catch(function(error) {
                console.log(error);
        });

        console.log("word : " + word);
        if(word!=undefined) {
            const searchurl = `http://localhost:8080/api/villages/search?words=${word}`;

            axios.get(searchurl)
                .then(function(response) {
                    setSearch(response.data);
                }).catch(function(error) {
                    console.log(error);
            });
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
           <div className={classes.container} style={{margin: '10px', background: '#FFFFFF'}}>
                <Grid container spacing={1} className={classes.list}>
                    {word && (search?.map((ville, i) => (
                        <Grid item key={i} xs={12}>
                            <Button onClick={() => navigate('/town', {state: ville})}>
                                &lt;{ville.nickname}&gt;&nbsp;
                                {ville.city} {ville.state} {ville.town} 
                            </Button>
                        </Grid>
                    )))}
                    {!word && (villages?.map((ville, i) => (
                        <Grid item key={i} xs={12}>
                            <Button onClick={() => navigate('/town', {state: ville})}>
                                &lt;{ville.nickname}&gt;&nbsp;
                                {ville.city} {ville.state} {ville.town} 
                            </Button>
                        </Grid>
                    )))}
                </Grid>
            </div>
        </>
    );
}

export default TownList;
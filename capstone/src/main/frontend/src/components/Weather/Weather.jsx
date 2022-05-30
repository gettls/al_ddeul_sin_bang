import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';

import useStyles from './styles';

const Weather = ({ weather }) => {
    const classes = useStyles();
    
    let k = weather.temp;
    let C = k - 273.15;
    let imgurl = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
        <div className={classes.weatherdiv} >
            <div className="Weath">
                <div className={classes.icondiv} >
                    <img className={classes.weatherIcon} src={imgurl} alt="weather-icon"/>
                </div>
                <div className="welement">
                    마을 온도 : &nbsp;{C.toFixed(1)} &#8451;
                </div>
                <div className="welement">
                    마을 습도 : &nbsp;{weather.humidity} %
                </div>
                <div className="welement">
                    마을 기압 : &nbsp;{weather.press} mb
                </div>
                <div className="welement">
                    마을 날씨 : &nbsp;{weather.descp}
                </div><br/><br/>
            </div>
        </div>
    );
}

export default Weather;
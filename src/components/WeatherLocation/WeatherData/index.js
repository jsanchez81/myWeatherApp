import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import WEATHER_STATE from './../../../constantes/weathers';

const wi = WEATHER_STATE.alien;

const WeatherData = ()=>(
    <div>
        <WeatherTemperature Component = {wi} temperature={20} />
        <WeatherExtraInfo humidity={80} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;


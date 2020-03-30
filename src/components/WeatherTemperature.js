import React from 'react';
import { WiDaySunny } from "weather-icons-react";

const WeatherTemperature = ({temperature, weatherState})=>(
    <div>
        <WiDaySunny size={28} color='red' />
        <span>{`${temperature} Cº`}</span></div>
);


export default WeatherTemperature;
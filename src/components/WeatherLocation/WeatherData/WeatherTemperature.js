import React from 'react';
import PropTypes from 'prop-types';

const getWeatherIcon = (Component)=>(
    <Component size={30} color='blue'/>
);

const WeatherTemperature = ({Component, temperature})=>(
    <div>
        {getWeatherIcon(Component)}
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    'temperature' : PropTypes.number.isRequired
}

export default WeatherTemperature;
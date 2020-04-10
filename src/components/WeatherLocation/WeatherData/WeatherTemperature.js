import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const getWeatherIcon = (Component)=>{
    const sizeIcon = 30;

    return(
        <Component className='wicon' size={sizeIcon} color='red'/>
    ) 
}


const WeatherTemperature = ({Component, temperature})=>(
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(Component)}
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType'>{`Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    'temperature' : PropTypes.number.isRequired
}

export default WeatherTemperature;
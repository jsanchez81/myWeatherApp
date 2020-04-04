import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

//Doble destructuring
const WeatherData = ({data : {temperature,humidity,wind}, weatherStateComponent })=>{
    const iconStateComponent = weatherStateComponent;
    // const {temperature,humidity,wind} = data;
    
    return (
        <div className='weatherDataCont'>
            <WeatherTemperature Component={iconStateComponent} temperature={temperature} />
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    )
};

WeatherData.propTypes ={
    'data' : PropTypes.shape({
        'temperature' : PropTypes.number.isRequired,
        'humidity' : PropTypes.number.isRequired,
        'wind' : PropTypes.string.isRequired
    })
}

export default WeatherData;


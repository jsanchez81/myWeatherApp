import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import WEATHER_STATE from './../../constantes/weathers';
import './styles.css';

const iconState = WEATHER_STATE.cloud;
const iconState2 = WEATHER_STATE.dayCloudyW;
const data = {
    'temperature' : 6,
    'humidity' : 10,
    'wind' : '10 m/s'
}

const data2 = {
    'temperature' : 29,
    'humidity' : 90,
    'wind' : '100 m/s',
    
}

// const WeatherLocation = () =>  (
//     <div className='weatherLocationCont'>
//         <Location city={"Madrid"} />
//         <WeatherData data = {data} weatherStateComponent={iconState} />
//     </div>
// );

class WeatherLocation extends Component{
    constructor(){
        super();
        this.state = {
            'city' : 'Buenos Aires',
            'data' : data,
            'iconState' : iconState
        };
    }

    handleUpdateClick= ()=>{
        this.setState({
            'city' : 'Madrid',
            'data' : data2,
            'iconState' : iconState2
        })
        console.log("Actualizado!!!");
    }

    render(){
        const {city, data, iconState} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                <WeatherData data = {data} weatherStateComponent={iconState} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

}

export default WeatherLocation;


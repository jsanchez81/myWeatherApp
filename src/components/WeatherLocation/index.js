import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
import WEATHER_STATE from './../../constantes/weathers';
import './styles.css';

const location = 'Lima';
const api_key = 'cb7a178c1b23c76c10dc1f0e8e54dba8';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    'temperature' : 6,
    'humidity' : 10,
    'wind' : '10 m/s',
    'iconState' : WEATHER_STATE.cloud,
    'city' : location
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
        this.state = {data};
    }

    getWeatherState = (weatherData)=>{
        //const weatherState = weatherData.weather[0].main
        const weatherState = WEATHER_STATE.dayCloudyW;
        return weatherState;
    }

    getData = (weatherData)=>{
        const {humidity, temp} = weatherData.main;
        const {speed} = weatherData.wind;
        const name = location;  //obtener la ciudad
        const data ={
            'temperature' : temp,
            humidity,
            'wind' : `${speed} m/s`,
            'iconState' : this.getWeatherState(weatherData),
            'city' : name
        }
        return data;
    }

    handleUpdateClick= ()=>{
        fetch(api_weather)
            .then((res) => res.json())
            .then( (resp) => {
                const newWather = this.getData(resp);
                console.log(newWather);
                this.setState({
                    'data' : newWather
                })
            })
    }

    render(){
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={data.city} />
                <WeatherData data = {data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

}

export default WeatherLocation;


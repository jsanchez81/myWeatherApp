import convert from 'convert-units';
import WEATHER_STATE from './../constantes/weathers';


const getTemp =  (kelvin)=>{
    return parseInt(convert(kelvin).from('K').to('C')).toFixed(2);
}

const getWeatherState = (weatherData)=>{
    const weatherStateId = weatherData.weather[0].id;

    console.log(weatherStateId);
    if(weatherStateId<300){
        return WEATHER_STATE.tormentas;
    }else if(weatherStateId<500){
        return WEATHER_STATE.llovizna;
    }else if(weatherStateId<600){
        return WEATHER_STATE.lluvioso;
    }else if(weatherStateId<700){
        return WEATHER_STATE.nieve;
    }else if(weatherStateId<800){
        return WEATHER_STATE.alien;
    }else if(weatherStateId===800){
        return WEATHER_STATE.soleado;
    }else if(weatherStateId<900){
        return WEATHER_STATE.nuboso;
    }else{
        return WEATHER_STATE.alien;
    }
}

const transformWeather = (weatherData)=>{
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const temperature = parseInt(getTemp(temp));
    const data ={
        temperature,
        humidity,
        'wind' : `${speed} m/s`,
        'iconState' : getWeatherState(weatherData),
    }
    return data;
}

export default transformWeather;
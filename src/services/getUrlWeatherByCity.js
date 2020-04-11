import {api_key, url_base_weather} from './../constantes/api_url';

const getUrlWeatherByCity = city=>{
    const url = `${url_base_weather}?q=${city}&appid=${api_key}`;
    return url;
}

export default getUrlWeatherByCity;
import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData'
import './styles.css';

class WeatherLocation extends Component{
    constructor(props){
        super(props);
        const {city} = props;

        this.state = {
            city,
            'data' : null
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }
    
    
    handleUpdateClick= ()=>{
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather)
            .then((res) => res.json())
            .then( (resp) => {
                const newWather = transformWeather(resp);
                console.log(newWather);
                this.setState({
                    'data' : newWather
                })
            })
    }

    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city} />
                { data ? 
                <WeatherData data = {data}></WeatherData> 
                :  
                <CircularProgress size={50}></CircularProgress>
                }
            </div>
        );
    }

}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick : PropTypes.func,
}

export default WeatherLocation;


// const WeatherLocation = () =>  (
//     <div className='weatherLocationCont'>
//         <Location city={"Madrid"} />
//         <WeatherData data = {data} weatherStateComponent={iconState} />
//     </div>
// );

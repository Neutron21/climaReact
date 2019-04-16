import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';
import './styles.css';
import {  CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../../../Constants/Weathers';

const icons = {
    [CLOUD]:"cloud",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [THUNDER]:"day-thumderstorm",
    [SNOW]:"snow",
    [DRIZZLE]:"day-showers"
};

const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];
    const sizeIcon= "4x";
    // let icon = weatherState;
    if(!icon){
        icon = "day-sunny";
    }
    return <WeatherIcons name={icon} size={sizeIcon} className="wicon"/>;
}


const WeatherTemperature = ({temperature, weatherState})=>{

    return(
        <div className="weahterTemperatureContent">
            {getWeatherIcon(weatherState)}
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType">{`C°`}</span>
        </div>
    )
};

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired
};
export default WeatherTemperature;
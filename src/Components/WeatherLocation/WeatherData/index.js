import React from 'react';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

import './styles.css';

const WeatherData = ({ data }) =>(

    <div className="weatherDataContent">
        <WeatherTemperature
            temperature={data.temperature}
            weatherState={data.weatherState}/>
        <WeatherExtraInfo humidity={data.humidity} wind={data.wind}/>
        
    </div>
);

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }) 
};

export default WeatherData;
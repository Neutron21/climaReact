import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ({humidity, wind}) => { 
    return(
        <div className="weatherExtraContent">
            <span className="extraInfoTxt">{`Humedad: ${humidity}%`}</span>
            <span className="extraInfoTxt">{`Vientos: ${wind}`}</span>
        </div>
    )
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
};
export default WeatherExtraInfo;
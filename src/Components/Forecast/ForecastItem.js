import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData'



const ForecastItem = ({weekDay, hour, data}) => (
            <div className="forecastItem">
                <div className="date">
                    {weekDay} {hour} hr
                </div>
                <WeatherData data={data}/>
            </div>
        )  
        ForecastItem.PropTypes = {
            weekDay:PropTypes.string.isRequired,
            data : PropTypes.shape({
                temperature: PropTypes.number.isRequired,
                weatherState: PropTypes.string.isRequired,
                humidity: PropTypes.number.isRequired,
                wind: PropTypes.string.isRequired
            }) 
        }

export default ForecastItem;
import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
import WeatherData from './WeatherData';

import { convertTemp, getWeatherState } from '../../services/transformWeather';
import './weatherLocation.css';




class WeatherLocation extends Component{

    constructor(props){
        super(props);
        let { city } = props;
        this.state = {
            city,
            data: null,
        };
        console.log("Constructor");
    }
    
    componentDidMount() {
        
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        
    }
    
    handleUpdateClick = ()=> { 
        let dataTransform={};
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve =>{
            return resolve.json();
        }).then( data => {
                dataTransform = {
                    temperature : convertTemp(data.main.temp),
                    humidity : data.main.humidity,
                    weatherState : getWeatherState(data.weather[0] ),
                    wind : `${data.wind.speed}m/s`
            }
            
            this.setState({
                city: data.name,
                data: dataTransform
            });
            
        });
        console.log("actualizado!");
         
    }
    render(){
        
        const { locationClick } = this.props;
        return(
            <div className="weatherLocationCont" onClick={locationClick}>
                <Location city={this.state.city}></Location>
                
                { this.state.data ?
                    <WeatherData data={this.state.data}></WeatherData> :
                    <CircularProgress/>
                }
                
            </div>
            );
    }
    
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    locationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
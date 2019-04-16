import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './Forecast/ForecastItem';
import { Url_Forecast, Api_Key} from '../Constants/Weathers';
import transformForecast from '../services/transformForecast';

class ForecastExtended extends Component{
    constructor(props){
        super(props);
        this.state = {
            city: this.props.city,
            forecastdata:""
        }
    }
   componentDidMount(){
        this.upDateCity(this.props.city);
   }
   componentWillReceiveProps(nextProps){
       if(nextProps.city !== this.props.city){
        this.setState({ forecastdata : null });
        this.upDateCity(nextProps.city);
       }
   }
   upDateCity = city => {
    const url_fore_cast = `${Url_Forecast}?q=${city}&appid=${Api_Key}`;

    fetch(url_fore_cast).then(
        data => (data.json())
    ).then(
        weather_data => {
            console.log(weather_data);   
            const forecastdata = transformForecast(weather_data);
            this.setState({ forecastdata });
        }
    )
   }
  
    renderForecastItemDays(forecastdata){
        console.log(forecastdata)
        return forecastdata.map( item =>(
            <ForecastItem key={`${item.weekDay}${item.hour}`} 
                          weekDay={item.weekDay} 
                          hour={item.hour} 
                          data={item.data}/>));
    }
    renderCargando(){
        return (
            <h3>Cargando . . .</h3>
        )
    }
    renderDetail = city =>{
        // let city = this.props.city;
       
       
    }
    render(){
        console.log("props")
        console.log(this.props)

        const { city } = this.props;
        const { forecastdata } = this.state;
        
        console.log("state")
        console.log(this.state)
        if(city){
            return(

                <div className="forecast-title">Pronostico Extendido
                    <h3>{city}</h3>
                    { forecastdata ?
                    this.renderForecastItemDays(forecastdata)
                    : this.renderCargando()}
                </div>

            );
        }else{
            return(
                <div>
                {this.renderCargando()}
                </div>
            )
        }
        
    }
    
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;
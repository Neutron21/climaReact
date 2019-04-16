import moment from 'moment';
import { getWeatherState, convertTemp } from './transformWeather';
import 'moment/locale/es';

const transformForecast = data => (
    data.list.filter(item =>(
        moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18 
    )).map(item => (
        {
            weekDay: moment.unix(item.dt).format('dddd'), 
            hour: moment.unix(item.dt).hour(),
            data : {
                temperature : convertTemp(item.main.temp),
                humidity : item.main.humidity,
                weatherState : getWeatherState(item.weather[0] ),
                wind : `${item.wind.speed}m/s`
            }
        }
    )) 

);

export default transformForecast;
import { Url_Forecast, Api_Key} from '../Constants/Weathers';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY'; 
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

//ActionCreator llamado setCity    
const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})

//payload es la city
export const setSelectedCity =  payload => {
    return dispatch => {
        const url_fore_cast = `${Url_Forecast}?q=${payload}&appid=${Api_Key}`;
        //activar inicador de busqueda de datos
        dispatch(setCity(payload));
        return fetch(url_fore_cast).then(
            data => (data.json())
        ).then( 
            weather_data => {
                const forecastdata = transformForecast(weather_data);
                console.log("forecastdata ");
                console.log(forecastdata);
                dispatch(setForecastData({city: payload, forecastdata}));
            }
        );
        
    };
}; 
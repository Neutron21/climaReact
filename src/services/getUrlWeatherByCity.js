import { Url_End_Point, Api_Key} from '../Constants/Weathers';

const getUrlWeatherByCity = city =>{
    return (`${Url_End_Point}?q=${city}&APPID=${Api_Key}`)
}

export default getUrlWeatherByCity;
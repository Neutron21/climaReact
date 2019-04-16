import convert from 'convert-units';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../Constants/Weathers';

export const convertTemp = tempKelvin => {
   
        return Number(convert(tempKelvin).from("K").to("C").toFixed(0));
     
};
export const getWeatherState = weather_data =>{
    const { id } = weather_data;
    let icon = "";
    if(id < 300){
        icon = THUNDER;
    }else if(id < 400){
        icon = DRIZZLE;
    }else if(id < 600){
        icon = RAIN;
    }else if(id < 700){
        icon = SNOW;
    }else if(id === 800){
        icon = SUN;
    }else{
        icon = CLOUD;
    }
    return icon;
}
export const getIconState = stateWeather => {
    return null;
};

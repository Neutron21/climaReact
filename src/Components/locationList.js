import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({cities , onSelectedLocation}) =>{
    
    const locationClick = city =>{
        onSelectedLocation(city);
    }

    const strToComponents = cities =>(   
        cities.map( 
            (city) => 
                <WeatherLocation key={city} city={city}
                                 locationClick={() => locationClick(city)}/>
            )
     );
     
    return(
        <div className="locationlist">
            {strToComponents(cities)}
        </div>
    )
    
}
LocationList.propTypes = {
    cities : PropTypes.array.isRequired
}
export default LocationList;
import React from 'react';
import PropTypes from 'prop-types';
import './weatherLocation.css';

const Location = (props) =>{
    
    return(
        <div className="locationCont">
            <h1>{props.city}</h1>
        </div>
    )
};
Location.propTypes = {
    city: PropTypes.string.isRequired
};
export default Location;
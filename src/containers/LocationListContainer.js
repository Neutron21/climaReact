import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LocationList from '../Components/locationList';
import { setSelectedCity } from '../actions/actionCreators'

class LocationListContainer extends Component {
   
    handleSelectionLocation = city =>{
        console.log(city);
        this.props.setCity(city); 
        console.log(this.props);
      }
   
      render() {
        console.log("props desde LLC");  
        console.log(this.props);
        return (
            <div>
                <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation}/>
            </div>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value))
  });

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
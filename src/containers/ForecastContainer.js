import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForecastExtended from '../Components/ForecastExtended';

class ForecastContainer extends Component {
    render() {
        return (
            <>
                {this.props.city ?
                <ForecastExtended city={this.props.city}></ForecastExtended>
                :<div></div> }
            </>
        );
    }
}

ForecastContainer.propTypes = {
    city: PropTypes.string,
};

const mapStateToProps = state => ({city: state.city});

export default connect(mapStateToProps, null)(ForecastContainer);
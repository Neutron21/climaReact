import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';

import { Url_Forecast, Api_Key} from './Constants/Weathers'
import ForecastContainer from './containers/ForecastContainer';
import transformForecast from './services/transformForecast';




import './App.css';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe'
]


class App extends Component {
  
  
  handleSelectionLocation = city =>{
    console.log("handleSelectionLocation "+city)
    this.setState({ city })
    this.props.setCity(city);
    
    const url_fore_cast = `${Url_Forecast}?q=${city}&appid=${Api_Key}`;
    
    fetch(url_fore_cast).then(
        data => (data.json())
    ).then(
        weather_data => {
            const forecastdata = transformForecast(weather_data);
            // console.log(forecastdata);
            // console.log(weather_data);
            this.setState({ forecastdata })
        }
    )
   
  }

  render() {
  // let { city } =  this.state;   city={city}
    return (
        <Grid fluid>
          <Row>
            <AppBar position={"sticky"}>
              <Toolbar>
                <Typography variant={"title"} color={"inherit"}>Weather App</Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {/* <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/> */}
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
             <Paper elevation={4}>
              <div className="details">
                <ForecastContainer></ForecastContainer>
              </div>
             </Paper>
             
            </Col>
          </Row>

        </Grid>
      
    );
  }
}


export default App;

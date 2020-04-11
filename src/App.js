import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import {Grid,Col,Row} from 'react-flexbox-grid';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  'Lima',
  'Londres',
  'Hawai',
  'Madrid',
  'Washington'
];

class App extends Component{

  handleSelectionLocation = city =>{
    console.log(`handleSelectionLocation ${city}`);
  }

  render(){
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <ToolBar>
              <Typography  color='inherit'>
                Weather App
              </Typography>
            </ToolBar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList cities = {cities}  onSelectedLocation={ this.handleSelectionLocation }/>
          </Col>
          <Col xs={12} md={6}>
            <div className='details'></div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl,Grid, Row, Col,Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import SearchLocation from './components/search';
import Guest from './components/guest';
import HotelList from './components/hotelsList';
import moment from 'moment';
//import LocationSearchInput from './components/locationMap';

import './App.css';
const FieldGroup = ({ id, label, help, ...props }) => {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      checkInDate: new Date(),
      checkOutDate: new Date(),
      bounds: '',
      hotelsList: [],
      roomOccupancies: []
    }
   this.handleSubmit = this.handleSubmit.bind(this); 
   this.handleLocation = this.handleLocation.bind(this); 
   this.handleGuest = this.handleGuest.bind(this); 
   this.onChangeCheckIn = this.onChangeCheckIn.bind(this); 
   this.onChangeCheckOut = this.onChangeCheckOut.bind(this); 
  }

  cmponentDidMount() {
    
  }
  handleSubmit() {
    let { 
      checkInDate, 
      checkOutDate, 
      bounds,
      roomOccupancies
    } = this.state ; 

    let data = {
      "currency": "USD",
       "posId": "hbg3h7rf28",
       "orderBy": "price asc, rating desc",

      stayPeriod: {
        start: moment(checkInDate).format('MM/DD/YYYY'),
        end: moment(checkOutDate).format('MM/DD/YYYY')
      },
      bounds ,
      roomOccupancies
    }


    axios({
      method: 'post',
      url: 'https://public-be.oski.io/hotel/v1.0/search/init',
      data: data,
      headers: {'Content-Type': 'application/json', 'oski-tenantId': 'Demo' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
  }

  onChangeCheckIn (date) {
    this.setState({ checkInDate: date });
  }  

  handleGuest (value) {
    this.setState({
      roomOccupancies: [
        {
         "occupants": [
            {
             "type": "Adult",
             "age": 25
            }
         ]
        }
     ],

    });
  } 

  onChangeCheckOut (date){
    this.setState({ checkOutDate: date });
  } 
  handleLocation (location) {
    this.setState({ 
        bounds: {
          "circle": {
             "center": {
                "lat": 49.0097, // Selected location lat long
                "long": 2.5479
             },
             "radiusKm": 50.5
          }
       }
    });
  }

  formInstance() {
  
    return (
     <form className="margin-15" id="searchForm">
      <div className="margin-15 search padding-15">
        <SearchLocation handleLocation={this.handleLocation} />
      </div>
      <div className="action-col">
      <div>
          <ControlLabel>Check In</ControlLabel>
             <DatePicker
             popperPlacement="bottom"
             id="CheckIn"
              onChange={this.onChangeCheckIn}
              value={this.state.checkInDate}
            />
           </div>
            <div>
            <ControlLabel>Check Out</ControlLabel>
               <DatePicker
               popperPlacement="bottom"
               id="CheckOut"
              onChange={this.onChangeCheckOut}
              value={this.state.checkOutDate}
            />  
             </div>
            <div>
            <Guest handleGuest= {this.handleGuest}/>
          </div>
        </div>
        <Button type="button" onClick={this.handleSubmit}>Submit</Button>
      </form>
    );
 
  }
  render() {
    return (
    <div className="App">
      <Grid>
        <Row>
          <Col md={12} sm={12}>
            {this.formInstance()}
          </Col>
        </Row>
         <Row>
          <Col md={12} sm={12}>
            <HotelList {...this.props} />
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;

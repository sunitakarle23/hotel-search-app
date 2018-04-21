import React, { Component } from 'react';
import { Panel,FormGroup, ControlLabel, FormControl,Grid, Row, Col,Button } from 'react-bootstrap';

class HotelList extends Component {
   constructor(props){
      super(props);
     
   }
   

   render() {
     const content = (
      <div>
          <Panel>
            <Panel.Heading>Panel heading without a title</Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
          <Panel>
            <Panel.Heading>
              <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </div>
    )
      return (
         <content />
      );
   }
}

export default HotelList;
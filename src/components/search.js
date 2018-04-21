import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl,Grid, Row, Col,Button } from 'react-bootstrap';

class SearchLocation extends Component {
	render() {
		let input = document.getElementById('searchTextField');
		let options = {
		    componentRestrictions: {
		        country: 'india'
		    }
		};
/*
		let autocomplete = new google.maps.places.Autocomplete(input, options);

		google.maps.event.addListener(autocomplete, 'place_changed', function () {

		    let place = autocomplete.getPlace();
		    let lat = place.geometry.location.lat();
		    let long = place.geometry.location.lng();
		    alert(lat + ", " + long);

		});
*/
		return (
			<Row>
        <Col md={12} sm={12}>
         
		    <ControlLabel>Where are you going</ControlLabel>
		     <FormControl
            type="text"
            placeholder="Enter text"
            onChange={this.props.handleLocation}
          />
          
        </Col>
      </Row>
		)
	}
}

export default SearchLocation;
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl,Grid, Row, Col,Button } from 'react-bootstrap';

class Guest extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange (value) {
		this.props.handleGuest(value);
	}
	render() {
		return (
			<FormGroup controlId="formControlsSelect">
		      <ControlLabel>Guest</ControlLabel>
		      <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
		        <option value="select">select</option>
		        <option value="1">1</option>
		        <option value="2">2</option>
		        <option value="3">3</option>
		        <option value="4">4</option>
		      </FormControl>
		    </FormGroup>
		);
  	}
}

export default Guest;
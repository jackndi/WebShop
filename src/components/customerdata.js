import React, { Component } from 'react';
import { FormGroup, FormControl } from "react-bootstrap";
import CustomerActions from '../actions/customer';
import clone from 'lodash/clone';

class CusomerData extends Component {
	constructor(props){
		super(props);

		this.state = {
			customer: {
				address: {
					name: this.props.customer.address.name ? this.props.customer.address.name : "" ,
					address: this.props.customer.address.address ? this.props.customer.address.address: "",
					zipCode: this.props.customer.address.zipCode ? this.props.customer.address.zipCode: "",
					city: this.props.customer.address.city ? this.props.customer.address.city: ""
				},
				validAddress: this.props.customer.validAddress ? this.props.customer.validAddress : false
			}
		};

		this.handleChangeName = this.handleChangeName.bind(this);
		this.hanleChangeAddress = this.hanleChangeAddress.bind(this);
		this.handleChangeZipCode = this.handleChangeZipCode.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
	}

	validationStateName() {
		console.log(this.state.customer.address.name.length);
		if(this.state.customer.address.name.length > 5)
			return "success";
		else if (this.state.customer.address.name.length > 2)
			return "warning";
		else
			return "error";
	}

	handleChangeName(event) {
		console.log(this.state.customer);
		let _customer = clone(this.state.customer);
		_customer.address.name = event.target.form[0].value;
		this.setState({customer: _customer, validAddress: this.checkAllValidations() });
		CustomerActions.SaveAddress(this.state);
	}

	validationStateAdress() {
		console.log(this.state.customer.address.address.length);
		if(this.state.customer.address.address.length > 5)
			return "success";
		else if (this.state.customer.address.address.length > 2)
			return "warning";
		else
			return "error";
	}

	hanleChangeAddress(event) {
		console.log(this.state.customer);
		let _customer = clone(this.state.customer);
		_customer.address.address = event.target.form[1].value;
		this.setState({customer: _customer, validAddress: this.checkAllValidations()})
		CustomerActions.SaveAddress(this.state);
	}



	validationStateZiCode() {
		if(this.state.customer.address.zipCode.length > 5)
			return "success";
		else if (this.state.customer.address.zipCode.length > 2)
			return "warning";
		else
			return "error";
	}

	handleChangeZipCode(event) {
		console.log(this.state.customer);
		let _customer = clone(this.state.customer);
		_customer.address.zipCode = event.target.form[2].value;
		this.setState({ customer: _customer, validAddress: this.checkAllValidations()});
		CustomerActions.SaveAddress(this.state);
	}

	validationStateCity() {
		if (this.state.customer.address.city.length > 5)
			return "success";
		else if (this.state.customer.address.city.length > 2)
			return "warning";
		else
			return "error";
	}

	handleChangeCity(event) {
		console.log(this.state.customer);
		let _customer = clone(this.state.customer);
		_customer.address.city = event.target.form[3].value;
		this.setState({ customer: _customer, validAddress: this.checkAllValidations()});
		CustomerActions.SaveAddress(this.state);
	}

	checkAllValidations() {
		return ("success" === this.validationStateName() &&
			"success" === this.validationStateAdress() &&
			"success" === this.validationStateZiCode() &&
			"success" === this.validationStateCity() );
	}

	render() {
		return (
			<div>
				<form>
					<FormGroup>
						<FormControl type="text" value={this.state.customer.address.name}
							placeholder="Enter your name" label="name"
							bsStyle={this.validationStateName()}
							onChange={this.handleChangeName}
							/>
					</FormGroup>
					<FormGroup>
						<FormControl type="text" value={this.state.customer.address.address}
							placeholder="Enter your street address"
							label="street"
							bsStyle={this.validationStateAdress()}
							onChange={this.hanleChangeAddress}
						/>
					</FormGroup>
					<FormGroup>
						<FormControl type="text" value={this.state.customer.address.zipCode}
							placeholder="Enter your zip code"
							label="Zip Code"
							bsStyle={this.validationStateZiCode()}
							onChange={this.handleChangeZipCode} 
						/>
					</FormGroup>
					<FormGroup>
						<FormControl type="text" value={this.state.customer.address.city}
							placeholder="Enter your city"
							label="city"
							bsStyle={this.validationStateCity()}
							onChange={this.handleChangeCity}
						/>
					</FormGroup>
				</form>
			</div>
		);
	}

}

CusomerData.defaultProps = {
	customer: {
		address : {
			name: "",
			address: "",
			zipCode:"",
			city: ""
		}
	},
	validAddress: false
}

export default CusomerData;


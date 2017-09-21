import React, { Component } from 'react';
import Reflux from 'reflux';
import { Grid, Button, Table, Well } from "react-bootstrap";
import CartActions from '../actions/cart';
import CartStore from '../stores/carts';
import CustomerData from "../components/customerdata";

export class Checkout extends Reflux.Component {
	constructor(){
		super();

		this.state = { 
			cart : [],
			customer: {
				address: {},
				validAddress: false,
			}
		}

		this.store = CartStore;

	}
	render() {
		let CheckoutEnabled = (this.state.customer.validAddress &&
			this.props.cart.length > 0);
		return (
			<Grid>
				<Well bsSize="small">
					<p> Please confirm your order and checkout your cart.</p>
				</Well>

				<Cart {...this.state} />

				<CustomerData {...this.state} />

				<Button disabled={!CheckoutEnabled} 
					bsStyle={CheckoutEnabled ? "success": "default"} >
					Proceed to checkout 
				</Button>
			</Grid>
		);
	}
}


class Cart extends Component {
	constructor(){
		super();
		this.state = {
			cart: []
		}
	}

	render() {
		let total = 0;
		this.props.cart.forEach((data) => {
			total += parseFloat(data[Object.keys(data)]).price.replace("$", "");
		});

		let tableData = this.props.cart.map((data, idx) => {
			return <CartElement productData={data} key={idx} />
		});

		if(!tableData.length){
			tableData = (<tr>
				<td colSpan="3">Your cart is empty </td>
			</tr>);
		}

		return (<Table striped condensed> 
			<thead>
				<tr>
					<th width="40%"> Name </th>
					<th width="30%"> Price </th>
					<th width="30%"> </th>
				</tr>
			</thead>
			<tbody>
				{tableData}
				<tr className="summery border">
					<td> <strong> Order total :</strong></td>
					<td> <strong> ${total}</strong></td>
					<td>
						{tableData.length ? 
							<Button bsSize="xsmall" bsStyle="danger"
							onClick={CartActions.ClearCart.bind(this)}>
							Clear cart </Button> : null }
						
					</td>
				</tr>
			</tbody>
		</Table>);
	}
}


class CartElement extends Component {
	render() {
		let title = Object.keys(this.props.productData);
		if(title){
			return (
				<tr>
					<td> {title}</td>
					<td>{this.props.productData[title].price}</td>
					<td> 
						<Button bsSize="xsmall" bsStyle="danger" 
							onClick={CartActions.RemoveFromCart.bind(this, this.props.productData)}>
							Remove </Button>
					</td>
				</tr>
			);
		} else {
			return null;
		}
	}
}
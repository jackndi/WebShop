import React, { Component } from 'react';
import Reflux from 'reflux';
import ProductStore from "../stores/products";
import CartStore from "../stores/carts";
import Actions from '../actions/products';
import CartActions from '../actions/cart';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

export class Products extends Reflux.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: JSON.stringify({ products: { main_offering: [], sale_offerings: [] }})
		};
		this.stores = [ProductStore, CartStore]
	}

	componentDidMount(){
		Actions.FetchProducts();
	}

	render() {
		// console.log(this.state.products);
		var json = JSON.parse(this.state.products);
		// console.log(json)
	  	if(json.products.main_offering){
			return (
				<Grid>
					<Offerings productData={json.products.main_offering} type={"main"} 
					maxProducts={1} /> 
					<Offerings productData={json.products.sale_offerings} type={"ribbon"}
					maxProducts={3} />
				</Grid> 
			);
		} else {
			return null;
		}
	}
}

// Products.PropTypes = {
// 	products: React.PropTypes.object,
// }


// class offerings

class Offerings extends Component {
	render(){

		let productData = this.props.productData.filter((data, idx) =>{
			return idx < this.props.maxProducts;
		});
		let data = productData.map((data, idx) => {
			if(this.props.type === "main") {
				return <MainOffering {...this.props} key={idx} productData={data} />
			} 
			else if(this.props.type === "ribbon") {
				return <RibbonOffering {...this.props} key={idx} productData={data} />
			}
		});
		return (
			<Row>{data}</Row>
		);
	}
}

// Offerings.PropTypes = {
// 	type: React.PropTypes.oneOf(['main', 'ribbon']),
// 	maxProducts: React.PropTypes.number,
// 	productData: React.PropTypes.array
// }

Offerings.defaultProps = {
	type: "main",
	maxProducts: 3
}

// MainOffering 

class MainOffering extends Component {
	render() {
		const title = Object.keys(this.props.productData);
		if(this.props.productData[title]) {
			return (
				<Col xs={12}>
					<Col md={3} sm={4}  xs={12}>
						<p>
							<img src={this.props.productData[title].image.replace("{size}", "200x150")} />
						</p>
					</Col>
				<Col md={9} sm={8} xs={12}>
					<Link to={"/item/"+ this.props.productData[title].SKU}>
						<h4>{title}</h4>
					</Link>

					<p>
						{this.props.productData[title].description}
					</p>

					<p>
						{this.props.productData[title].price}
						{" "}
						({this.props.productData[title].savings})
					</p>

					<p>
						<Button bsSize="large" onClick={CartActions.AddToCart.bind(this, this.props.productData)}>
						Add to cart </Button>
					</p>

				</Col>
			</Col>
			);
		} else {
			return null;
		}
	}
}


// MainOffering.PropTypes = {
// 	productData: React.PropTypes.object
// }


class RibbonOffering extends Component {
	render() {
		const title = Object.keys(this.props.productData)
		if(this.props.productData) {
			return ( 
				<Col md={4} sm={4} xs={12}>
					<Col xs={12}>
						<p>
							<img src={this.props.productData[title].image.replace("{size}", "200x80")} />
						</p>
					</Col>
					<Col xs={12}>
						<Link to={"/item/" + this.props.productData[title].SKU}>
							<h4>{title}</h4>
						</Link>

						<p>
							{this.props.productData[title].description}
						</p>

						<p>
							{this.props.productData[title].price}
							{" "}
							({this.props.productData[title].savings})
						</p>

						<p>
							<Button bsSize="large" onClick={CartActions.AddToCart.bind(this, this.props.productData)}> Add to cart </Button>
						</p>
					</Col>
				</Col>
			); 
		} else {
			return null;
		}
	}
}

// RibbonOffering.PropTypes = {
// 	productData: React.PropTypes.object
// }
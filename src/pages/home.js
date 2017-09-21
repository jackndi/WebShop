import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class Home extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col sm={12}>
						<Jumbotron>
							<h1> WebShop</h1>

							<p>Welcome to my webshop.
							This is a simple information
							unit where you can showcase
							your best products or
							tell a little about the webshop.</p>

							<p> 
							<LinkContainer to="/products">
								<Button bsStyle="primary" to="/products" >
									View products
								</Button>
							</LinkContainer>
							</p>
						</Jumbotron>
					</Col>
				</Row>
			</Grid>
		);
	}
}
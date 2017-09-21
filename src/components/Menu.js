import React from 'react';
import Reflux from 'reflux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import CartStore from "../stores/carts";
// import { LinkContainer } from 'react-router-bootstrap';


export class Menu extends Reflux.Component {
  constructor(props){
    super(props);

    this.state = { cart: [] }
    this.store = CartStore;

  }


  render() {
    return (
      <Navbar inverse fixedTop>
      	<Navbar.Header>
      		<Navbar.Brand>
      			<Link to="/"> WebShop </Link>
      		</Navbar.Brand>
      		<Navbar.Toggle />
     	</Navbar.Header>
     	<Navbar.Collapse>
     		<Nav>
          <NavItem eventKey={1} href="/company"> About </NavItem>
     		 <NavItem eventKey={2} href="/products"> Products </NavItem>
     		</Nav>

     		<Nav pullRight>
            <NavItem eventKey={3} href="/products"> Your cart: {this.state.cart.length} items </NavItem>
     		</Nav>
     	</Navbar.Collapse>
      </Navbar>
    );
  }
}
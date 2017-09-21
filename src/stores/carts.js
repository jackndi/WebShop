import Reflux from 'reflux';
// import Request from 'superagent';
import CartActions from '../actions/cart';

class CartStore extends Reflux.Store {
	constructor(){
		super();
		this.state = { 
			cart : []
		}
		this.listenTo(CartActions.AddToCart, this.onAddToCart);
		this.listenTo(CartActions.RemoveFromCart, this.onRemoveFromCart);
		this.listenTo(CartActions.ClearCart, this.onClearCart);
	}
	
	onAddToCart(item) {
		const _cart = this.state.cart;
		_cart.push(item);
		this.setState({ cart: _cart });
	}

	onRemoveFromCart(item){
		const _cart = this.state.cart.filter((cartItem) => {
			return item !== cartItem
		});
		this.setState({ cart: _cart});
	}

	onClearCart(){
		this.setState({ cart: []});
	}
}

export default CartStore;
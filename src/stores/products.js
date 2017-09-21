import Reflux from 'reflux';
import Request from 'superagent';
import Actions from '../actions/products';

class ProductStore extends Reflux.Store {
	constructor(){
		super();
		// this.state = { products : []}
		this.listenTo(Actions.FetchProducts, this.onFetchProducts);
	}
	
	onFetchProducts() {
			Request
				.get('/products.json')
				.end((err, res) => {
					// console.log(JSON.parse(res.text))
					 // this.setState({products: res.text});
					this.trigger({products : res.text});
				} )
	}
}

export default ProductStore;
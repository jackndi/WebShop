import Reflux from 'reflux';
import CustomerActions from '../actions/products';

class CustomerStore extends Reflux.Store {
	constructor(){
		super();
		this.state = { customer : [], validAddress: false };
		this.listenTo(CustomerActions.SaveAddress, this.onSaveAddress);
	}
	
	onSaveAddress(address) {
		const _customer = address ;
		this.setState({ customer: _customer});

	}
}

export default CustomerStore;
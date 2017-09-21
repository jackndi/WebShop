import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router'
import './index.css';
import App from './App';
import { Whoops404 } from './components/Whoops404';
import { Checkout} from './pages/checkout';
import { Company } from './pages/company';
import { Home } from './pages/home';
import { Item } from './pages/item';
import { Products} from './pages/products';
import { Receipt} from './pages/receipt';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={browserHistory}>
					<Route exact path="/" name="app" component={App} >
						<IndexRoute component={Home} />
						<Route  path="home" name="home" component={Home} />
						<Route  path="company" name="company" component={Company} />
						<Route  path="products" name="products" component={Products} />
						<Route  path="item/:id" name="item" component={Item} />
						<Route  path="checkout" name="checkout" component={Checkout} />
						<Route  path="receipt" name="receipt" component={Receipt} />
						<Route path="*" component={Whoops404}/>
					</Route> 
				</Router>, document.getElementById('root'));
registerServiceWorker();

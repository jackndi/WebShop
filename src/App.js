import React, { Component } from 'react';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        	{this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

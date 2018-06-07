import React from 'react';
import {AppRegistry} from 'react-360';

import Products from './src/Products.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {products: []};
  }

  componentWillMount () {
    const url = 'https://ninja-the-virtual.herokuapp.com/products?offset=0&limit=50';

    fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({products: json.products});
      });
  }

  render() {
    return (
      <Products products={this.state.products}></Products>
    );
  }
};

AppRegistry.registerComponent('App', () => App);

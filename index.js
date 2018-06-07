import React from 'react';
import {AppRegistry} from 'react-360';

import Products from './src/Products.js'

export default class App extends React.Component {
  render() {
    const products = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 11},
      {id: 12},
      {id: 13},
      {id: 14},
      {id: 15},
      {id: 16},
      {id: 17},
    ]

    return (
      <Products products={products}></Products>
    );
  }
};

AppRegistry.registerComponent('App', () => App);

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-360';
import Product from './Product.js';

export default class List extends React.Component {
  render() {
    const products = this.props.products.map(product => {
      return (<Product product={product} key={product.id}></Product>)
    })

    return (
      <View style={styles.panel}>
        {products}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

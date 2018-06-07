import React from 'react';
import {
  Linking
} from 'react-native'
import {
  StyleSheet,
  Text,
  Image,
  View,
  VrButton
} from 'react-360';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zoom: false,
    }
  }
  go() {
    Linking.openURL(this.props.product.sampleUrl)
  }

  onEnter() {
    this.setState({hover: true});
  }

  onExit() {
    this.setState({hover: false});
  }

  render() {
    const hover = this.state.hover ? styles.productHover : {};

    return (
      <VrButton onClick={this.go} onEnter={this.onEnter.bind(this)} onExit={this.onExit.bind(this)}>
        <View style={[styles.product, hover]}>
          <Image source={{uri: this.props.product.sampleImageUrl}} style={styles.productImage}></Image>
        </View>
      </VrButton>
    );
  }
};

const styles = StyleSheet.create({
  product: {
    width: 246,
    height: 246,
    margin: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  productHover: {
    opacity: 0.9,
  },
  productImage: {
    width: 246,
    height: 246,
  },
});

import React from 'react';
import {
  Linking
} from 'react-native'
import {
  StyleSheet,
  Text,
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
    Linking.openURL('https://example.com/')
  }

  onEnter() {
    this.setState({hover: true});
  }

  onExit() {
    this.setState({hover: false});
  }

  render() {
    const hover = this.state.hover ? styles.hover : {};

    return (
      <View style={[styles.product, hover]}>
        <VrButton onClick={this.go} onEnter={this.onEnter.bind(this)} onExit={this.onExit.bind(this)}>
          <Text>Hello Product</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  product: {
    width: 246,
    height: 246,
    margin: 2,
    backgroundColor: 'blue',
  },
  hover: {
    borderColor: 'white',
    borderWidth: 2,
  }
});

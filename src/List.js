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
  constructor() {
    super()

    this.state = {
      list: [1, 2, 3]
    }
  }

  go(n) {
    Linking.openURL('https://example.com/' + n)
  }

  render() {
    const textList = this.state.list.map(n => {
      return (
        <VrButton onClick={() => this.go(n)} key={n}>
          <Text style={styles.greeting}>{n}</Text>
        </VrButton>
      )
    })

    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          {textList}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

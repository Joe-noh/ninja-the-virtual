import React from 'react';
import {AppRegistry} from 'react-360';

import List from './src/List.js'

export default class App extends React.Component {
  render() {
    return (
      <List></List>
    );
  }
};

AppRegistry.registerComponent('App', () => App);

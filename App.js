/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';

const setItems = Promise.all([
  AsyncStorage.setItem('bananas', 5),
  AsyncStorage.setItem('apples', 10),
  AsyncStorage.setItem('strawberries', 10)
]);

export default class App extends Component {
  state = {
    bananas: 0,
    apples: 0,
    strawberries: 0
  };

  async componentDidMount() {
    await setItems;
    const bananas = await AsyncStorage.getItem('bananas');
    const apples = await AsyncStorage.getItem('apples');
    const strawberries = await AsyncStorage.getItem('stawberries');
    this.setState({
      bananas, apples, strawberries
    })
  }

  render() {
    return <View style={styles.container}>
      <Text>{`the number of bananas is ${this.state.bananas}`}</Text>
      <Text>{`the number of apples is ${this.state.apples}`}</Text>
      <Text>{`the number of stawberries is ${this.state.strawberries}`}</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

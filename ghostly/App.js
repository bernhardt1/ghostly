import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './Map.js';

export default class App extends React.Component {
  render() {
    return (
      <Map style={styles.container}></Map>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

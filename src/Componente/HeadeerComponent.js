import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

export default class HeadeerComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>

        <View>

      <View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#80deea',
  flex: 1,
},
header:{
  height: 70,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0277BD',
  borderWidth: 1,
  borderColor: '#DDD',
}

});

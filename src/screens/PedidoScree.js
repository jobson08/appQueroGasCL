import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

export default class PedidoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.textTopoPainel}>Bom Dia!</Text>
   </View>
   
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#80deea',
  //  backgroundColor: colors.primary,
  padding: 20,
},

textTopoPainel: {
color: '#ffffff',
textAlign: 'center',
fontSize: 22,
fontWeight: 'bold',
},

});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import ActionButton from 'react-native-action-button';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';



export default class HomeScreen extends React.Component {
  render() {
    return (


      <View style={styles.container}>

   <View style ={styles.quadroLogin}>


     <View style={styles.topoPainel}>
     <Text style={styles.textTopoPainel}>Fassa Seu Pedido</Text>

     </View>

   </View>

  <TouchableOpacity style={styles.btnIconePro}>
  <MaterialIcon name='send' color="#fff" size={30} />
     </TouchableOpacity>

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

quadroLogin: {
width: 340,
height: 440,
backgroundColor: 'rgba(0,0,0,0.4)',
borderWidth: 1,
borderColor: 'steelblue',
},
topoPainel: {
width: 340,
height: 40,
backgroundColor:  'rgba(0,0,10,0.2)',
},

textTopoPainel: {
color: '#ffffff',
fontSize: 22,
fontWeight: 'bold',
textAlign: 'center',
},

textoTela: {
color: '#ffffff',
textAlign: 'center',
fontSize:20,
fontWeight: 'bold',
marginBottom: 10,
},

btnIconePro: {
alignItems: 'center',
paddingLeft:300,

}
});

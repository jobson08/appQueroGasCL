import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
//import LoginScreen from './screens/LoginScreen';

export default class CadastroLogScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>

   <View style ={styles.quadroLogin}>

     <View style={styles.topoPainel}>
            <Text style={styles.textoTela}>Cadastro de  Usuario</Text>
     </View>

     <TextInput
       style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'
       placeholder="E-mail"
     />

     <TextInput
       style={styles.input}
       placeholder="Senha"
     />

     <TextInput
       style={styles.input}
       placeholder="Comfirma Senha"
     />

     <TouchableOpacity
           style={styles.button}
           onPress={ () => this.props.navigation.navigate('Home')} >
           <Text style={styles.buttonText}> Registar </Text>
     </TouchableOpacity>

   </View>

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
height: 30,
backgroundColor:  'rgba(0,0,10,0.2)',
marginBottom:20,
},

textTopoPainel: {
color: '#ffffff',
textAlign: 'center',
fontSize: 22,
fontWeight: 'bold',
},


textoTela: {
color: '#ffffff',
textAlign: 'center',
fontSize:20,
fontWeight: 'bold',
marginBottom: 10,
},

input: {
height: 40,
backgroundColor: '#ffffff',
alignSelf: 'stretch',
borderColor: 'steelblue',
borderWidth: 1,
paddingHorizontal: 20,
marginBottom:5,
borderRadius: 40,
},

button: {
height: 40,
backgroundColor: '#01579B',
alignSelf: 'stretch',
marginTop: 10,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
},

buttonText: {
color: '#ffffff',
fontSize: 25,
fontWeight: 'bold',
},

});

/**export default StackNavigator({
  Cadastro: {
    screen: CadastroLogScreen,
  },
});**/

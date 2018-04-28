import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Button,
 KeyboardAvoidingView
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import Botoes from '../Componente/Botoes';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

import CadastroLogScreen from '../screens/CadastroLogScreen';
import HomeScreen from '../screens/HomeScreen';

export default class LoginScreen extends Component {
  render() {
    return (

      <View style={styles.container}>

      <Image
      source={require('../img/Logo-quero-gas.png')}
      style={styles.logo}
      />
      <View style ={styles.quadroLogin}>
        <View style={styles.topoPainel}>
            <Text style={styles.textTopoPainel}>Bom Dia usuario !</Text>
        </View>
        <Text style={styles.textoTela}>Entre com o seu Login</Text>

      <TextInput
        style={styles.input} underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="E-mail"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
    />

    <TouchableOpacity
          style={styles.buttonEsq}
          onPress={this.onPress}>

          <Text style={styles.buttonTextEsq}> Esqueceu sua Senha ? </Text>

        </TouchableOpacity>

    <TouchableOpacity
          style={styles.button}
          onPress={ () => this.props.navigation.navigate('Home')} >
          <Text style={styles.buttonText}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.buttonfacebook}
              onPress={this.onPress}>

              <Text style={styles.buttonTextFacebook}> Facebook </Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.buttonGmail}
              onPress={this.onPress}>

              <Text style={styles.buttonTextGmail}> Gmail </Text>
        </TouchableOpacity>

      </View>

      <ActionButton buttonColor="rgba(0,134,44,0.9)"
      title="Cadastro" onPress={ () => this.props.navigation.navigate('Cadastro')} >
     </ActionButton>

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
  padding: 20,
},

logo: {
  width: 120,
  height: 120,
},

quadroLogin: {
width: 300,
height: 400,
backgroundColor: 'rgba(0,0,0,0.4)',
borderWidth: 1,
borderColor: 'steelblue',
},
topoPainel: {
width: 300,
height: 30,
backgroundColor:  'rgba(0,0,10,0.2)',
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
borderRadius: 20,
},

buttonEsq: {
alignItems: 'center'
},

buttonTextEsq: {
color: '#ffffff',
fontSize: 15,
fontWeight: 'bold',
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

buttonfacebook: {
height: 40,
backgroundColor: '#0091EA',
alignSelf: 'stretch',
marginTop: 10,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
},

buttonTextFacebook: {
color: '#ffffff',
fontSize: 25,
fontWeight: 'bold',
},

buttonGmail: {
height: 40,
backgroundColor: '#F44336',
alignSelf: 'stretch',
marginTop: 10,
justifyContent: 'center',
alignItems: 'center',
borderRadius: 20,
},

buttonTextGmail: {
color: '#ffffff',
fontSize: 25,
fontWeight: 'bold',
},

Buttonicone: {
marginTop: 40,
},

Buttonicone: {
position: 'absolute',
fontSize: 20,
height: 22,
color: 'white',
},
});

/**export default StackNavigator({
  Login: {
    screen: LoginScreen
  },
});**/

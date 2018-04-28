
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CadastroLogScreen from './src/screens/CadastroLogScreen';

/**const TabNav = TabNavigator(
 {
    Home: {
      screen: HomeScreen
    },
    Cadastro: {
      screen: CadastroLogScreen
    }
  },
  {

  }
);
**/


const RootStack = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen:HomeScreen ,
    },
    Cadastro: {
        screen:CadastroLogScreen
      },
  },

  {
    headerMode: 'none',
    initialRouteName: 'Login',
  }
);

export default class App extends Component {
render() {
	  return(
      <RootStack />
    //<RootStack />
// <LoginScreen />
	 //<HomeScreen />

   );
 }
}

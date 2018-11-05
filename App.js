import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./components/screens/HomeScreen"
import SignUp1 from "./components/screens/SignUp1"
import SignUp2 from "./components/screens/SignUp2"
import SignUp3 from "./components/screens/SignUp3"
import LoginScreen from "./components/screens/LoginScreen"
import TabNavigator from "./components/navigator/TabNavigator"



export default class App extends Component {
  render() {
    return (
      <SwitchNav />
      
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Name: SignUp1,
  Email: SignUp2,
  Birthday: SignUp3,
  Login: LoginScreen,

  
})

const SwitchNav = createSwitchNavigator({
  App: AppStackNavigator,
  Entry: TabNavigator,
},
  {
    initialRouteName: 'App'
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

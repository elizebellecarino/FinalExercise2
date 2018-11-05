import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';


class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
  
    loginHandler = () => {
      this.props.navigation.navigate('Login')
    }
  render() {
      return (
          <View style={styles.container}>
          
              <View styles={styles.view}>
                  <Text style={styles.welcome}> Welcome to Ting </Text>
              </View>
              <View style={styles.loginButton}>
                  <TouchableOpacity onPress={() => this.loginHandler()}>
                      <View style={styles.buttonStyle}>
                          <Text style={styles.loginButtonText}>
                              Login
                          </Text>
                      </View>
                  </TouchableOpacity>
                  </View>
              <View style={styles.signUpButton}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Name')}>
                      <View style={styles.buttonStyle}>
                          <Text style={styles.signUpButtonText}>
                              Sign Up
                          </Text>
                      </View>
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
      backgroundColor: '#00bfa5',
  },
  welcome: {
      color: "#fff",
      fontSize: 33,
      marginLeft:'-20%',
      marginBottom: 7
  },
  loginButton: {
      width: "90%",
      height: 47,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#fff",
      backgroundColor: "#fff",
      marginTop: 10,
      marginBottom: 7,
      justifyContent: "center"
  },
  signUpButton: {
      width: "90%",
      height: 47,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#fff",
      marginTop: 10,
      justifyContent: "center"
  },
  buttonStyle: {
      justifyContent: 'center',
      alignItems: "center"
  },
  signUpButtonText: {
      color: "#fff",
      fontSize: 15,
  },
  loginButtonText: {
      color: "#00bfa5",
      fontSize: 15,
  },
  buttonContainer: {
      width: "100%",
      // justifyContent: 'center',
      alignItems: "center"
  }
});

export default HomeScreen;

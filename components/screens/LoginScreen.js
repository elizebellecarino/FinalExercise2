import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Header, Left, Icon } from 'native-base';
import PasswordToggleInput from '../ToggleInput/PasswordToggleInput' 





class LoginScreen extends Component {

   
    static navigationOptions = {
        header: null
    }

    state={
        email: "",
        password:""
       
      }

      emailInput = value => {
        this.setState({
          email: value
        });
      };
      passInput = value => {
        this.setState({
          password: value
        });
      };

     
     loggedOn = () =>{
      if(this.state.email===''){
          alert('Please enter your email.')
      }
      else if(this.state.password===''){
        alert('Please enter your password.')
      }
    
      else{
        this.setState({
          email: '',
          password: ''
        });
        this.props.navigation.navigate('Explore')
    
      }
        
      }
    

      render() {
        return (
            <View style={{flex: 1}}>
                <Header style={{backgroundColor: "#00bfa5"}}>
                    <Left style={{marginRight: "85%"}}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={()=>this.props.navigation.goBack()}/>
                    </Left>
                </Header>

                <View style={styles.container}>
                    <Text style={styles.welcome}> Login </Text>
                    <Text style={styles.emailTitle}>EMAIL</Text>
                    <View style={styles.emailInput}>
                       
                        <TextInput
                         onChangeText={text => this.emailInput(text)}
                         value={this.state.email} 
                         underlineColorAndroid="white" />
                </View>
                    <Text style={styles.passwordTitle}>PASSWORD</Text>
                    <View style={styles.passwordInput}>
                     
                        <PasswordToggleInput
                        onChangeText={text => this.passInput(text)}
                        value={this.state.password} 
                        underlineColorAndroid="white"/>
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={this.loggedOn}>
                            <View style={styles.buttonStyle}>
                                <Text>
                                    <Icon name="ios-arrow-forward" size={24} color="#00bfa5"/>
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        fontSize: 30,
        marginLeft: "-71%",
        marginBottom: 15
    },
    emailTitle: {
        color: "#fff",
        fontSize: 12,
        marginRight: "80%"
    },
    passwordTitle: {
        color: "#fff",
        fontSize: 12,
        marginRight: "70%"
    },
    emailInput: {
        width: '90%',
        marginTop: -10
    },
    passwordInput: {
        width: '90%',
        marginTop: -10
    },
   
    nextButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        marginLeft: "70%",
        marginTop: 30,
        justifyContent: "center",
        backgroundColor: 'white',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    },
});

export default LoginScreen;
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Switch} from 'react-native';
import { Header, Left, Icon } from 'native-base';




class SignUp2 extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
      switchValue: true
    };

    _handleToggleSwitch = () => this.setState(state => ({
        switchValue: !state.switchValue
    }));
        

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00bfa5" }}>
                    <Left style={{ marginRight: "85%" }}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>

                <View style={styles.container}>
                    <Text style={styles.welcome}> And, your email?</Text>
                    <Text style={styles.title}>EMAIL</Text>
                    <View style={styles.emailInput}>
                        <TextInput underlineColorAndroid="white" />
                    </View>
                    
                    <View style={styles.note}>
                        <Text style={{color:"white", fontSize: 12}}>I'd like to receive marketing and policy communications from Ting and its partners.</Text>
                        <Switch onValueChange={this._handleToggleSwitch} value={this.state.switchValue} style={{marginLeft:'-10%'}} />
                    </View>
                    
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Birthday')}>
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
        fontSize: 27,
        marginLeft: "-35%",
        marginBottom: 10
    },
    title: {
        color: "#fff",
        fontSize: 12,
        marginRight: "78%"
    },
    note: {
        width: "80%",
        marginLeft:'-8%',
        flexDirection:'row'
    },
    emailInput: {
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
        backgroundColor: '#fff',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    }
});

export default SignUp2;
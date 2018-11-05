import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { Header, Left, Icon } from 'native-base';




class SignUp1 extends Component {
    static navigationOptions = {
        header: null
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
                    <Text style={styles.welcome}> What is your name? </Text>
                    <Text style={styles.title}>FIRST NAME</Text>
                    <View style={styles.firstNameInput}>
                       
                        <TextInput underlineColorAndroid="white" />
                    </View>
                    <Text style={styles.title}>LAST NAME</Text>
                    <View style={styles.lastNameInput}>
                        
                        <TextInput underlineColorAndroid="white"/>
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
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
        marginLeft: "-25%",
        marginBottom: 15
    },
    title: {
        color: "#fff",
        fontSize: 12,
        marginRight: "70%"
    },
    firstNameInput: {
        width: '90%',
        marginTop: -10
    },
    lastNameInput: {
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

export default SignUp1;

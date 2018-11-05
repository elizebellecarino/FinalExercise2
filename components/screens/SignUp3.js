import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header, Left, Icon, DatePicker } from 'native-base';



class SignUp3 extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.state = {date:"YYYY-MM-DD"}
      }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00bfa5" }}>
                    <Left style={{ marginRight: "85%" }}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>
                <View style={styles.container}>
                    <View styles={styles.view}>
                        <Text style={styles.welcome}> When is your birthday? </Text>
                    </View>
                    <View style={styles.disclaimer}>
                        <Text style={{color:"white", fontSize: 12, marginBottom: 10}}>You must be at least 18 years old to use Ting. Other people won't see your birthday.</Text>
                        <Text style={{color:"white", fontSize: 12}}>BIRTHDAY</Text>
                    </View>
                    <View style={{ marginRight:'4%', borderBottomWidth:1, borderColor:'white', width:'90%'}}>
                    <TouchableOpacity>
                    <DatePicker placeHolderTextStyle={{color:'white'}}
                     maximumDate={new Date(2018, 12, 31)}
                     minimumDate={new Date(1980, 1, 1)}
                     textStyle={{color:'white'}}
                     date={this.state.date} 
                     onDateChange={(date) => {this.setState({date: date})}} />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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
        marginLeft: "-16%",
        marginBottom: 10
    },
    disclaimer: {
        width: "80%",
        marginLeft:'-8%',
        
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
    },
    birthdayInput: {
        width: '90%',
        marginTop: -25
        
    }
});

export default SignUp3;
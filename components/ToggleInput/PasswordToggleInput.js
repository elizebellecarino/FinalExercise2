import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

class PasswordToggleInput extends Component {
    constructor(props) {
        super(props);
        this.state={
           secureTextEntry:true 
        }
    }

    onShowPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render() {
        return (
            <View style={{flexDirection:'row'}}>
             <TextInput {...this.props}
             style={{flex:1}}
             secureTextEntry={this.state.secureTextEntry}
             />
             <TouchableOpacity onPress={this.onShowPress} >
             <Text style={{color:'#fff', marginRight:'10%', fontSize:12}}>SHOW</Text>
             </TouchableOpacity>  
            
            </View>
        ) 
    }
}

    



export default PasswordToggleInput;
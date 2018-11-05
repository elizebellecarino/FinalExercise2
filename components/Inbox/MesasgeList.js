import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {details} from '../../components/data/Inbox'
class Inbox extends Component {
    state = {
        messageDetails: details
     }
     
  render() {
    return (
        <View style={{alignItems: "center"}}>
        {
           this.state.messageDetails.map((item, index) => (
            
              <TouchableOpacity
                 key = {item.id}
                 style = {styles.container}>
                 
                <View style={{flex: 1, flexDirection:"row", borderBottomWidth:1,borderBottomColor:'darkgrey'}}>
                <Image source={{
                    uri: item.image
                }}
                style={styles.image}>
                </Image>
               
                <View style={{flex: 1, flexDirection:"column"}}>   

                <View style={styles.date}>

                <Text style = {styles.textName}>
                    {item.name} 
                 </Text>

                  <Text>
                    {item.date}
                 </Text>

                   </View> 
                  <Text style = {styles.textMessage}>
                    {item.message}
                 </Text>
               
                 </View>
                 </View>
                
              </TouchableOpacity>
              
           ))
        }
     </View>
    );
  }
}
const styles = StyleSheet.create ({
    container: {
       padding: 10,
       marginTop: 3,
       backgroundColor: 'white',
       width: "90%",
        borderRadius: 25
    },
    textName: {
        color: '#4f603c',
        marginLeft: "5%",
        fontWeight:"bold"
     },
    textMessage: {
       color: '#4f603c',
       marginLeft: "5%"
    },
     image:{
        width: 50, 
        height: 50, 
        borderRadius: 25
        
    },
    date:{
        flex: 1, 
        flexDirection:"row", 
        justifyContent:"space-between"
    }
 })

export default Inbox;

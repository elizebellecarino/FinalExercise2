import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MessageList from '../../components/Inbox/MesasgeList'

class InboxScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     
      <View style={styles.container}>
      
          <Text style={styles.inbox}> Inbox</Text>
          <Text style={styles.messages}>You have no unread messages.</Text>
          

          <ScrollView>

          <MessageList/>

          </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  inbox:{
    color:"#2f4f4f", 
    fontWeight:"bold", 
    fontSize:40,
    marginLeft: 10
  },
  messages:{
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 20
  }
  
});


export default InboxScreen;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TripsScreen extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <Text> Trips </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
})

export default TripsScreen;
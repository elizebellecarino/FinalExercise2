import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Explore from '../../components/ExploreCategories/Explores';
import DataSample from '../../components/ExploreCategories/DataSamples';
import SavedList from '../../components/ExploreCategories/SavedList';
 class ExploreScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Explore/>
        <DataSample />
        <SavedList />
      </View>

      </ScrollView>
    )
  }
 }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  });
 

 export default ExploreScreen;
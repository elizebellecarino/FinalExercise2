import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import  { saved_list } from '../../components/data/DataSample';

class SavedList extends Component {
    state = {
        
        Saved: saved_list
    };

  render() {
    return (
      <View style={{backgroundColor:'white' }}>
         <Text style={{ fontSize: 30, color: '#808080', marginBottom:15, fontWeight:'normal' }}> Stockholm </Text>
      
        <View >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 170 }}>
                    <Image source={{
              uri: this.state.Saved[3].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
               
                 <Text style={{color:'black', fontSize:8, marginTop: 10}}>ENTIRE APARTMENT- 1 BEDROOM</Text>
                 <Text style={{color:'#2f4f4f', fontSize:15, marginTop: 10}}>Great studio in Zurich center</Text>
                 <Text style={{color:'#808080', fontSize:12, marginTop: 10}}>85 SEK per person</Text>
                 </View>
                </View>
        </View>         
      
        <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 170 }}>
                    <Image source={{
              uri: this.state.Saved[0].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  <Text style={{color:'black', fontSize:8, marginTop: 10}}>ENTIRE APARTMENT- 1 BEDROOM</Text>
                  <Text style={{color:'#2f4f4f', fontSize:15, marginTop: 10}}>Centric Studio with roof top terrace</Text>
                  <Text style={{color:'#808080', fontSize:12, marginTop: 10}}>80 SEK per person</Text>
                  </View>
                 </View>
          </View>

          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 170 }}>
                    <Image source={{
              uri: this.state.Saved[1].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  <Text style={{color:'black', fontSize:8, marginTop: 10}}>ENTIRE APARTMENT- 1 BEDROOM</Text>
                  <Text style={{color:'#2f4f4f', fontSize:15, marginTop: 10}}>Great studio in Zurich center</Text>
                  <Text style={{color:'#808080', fontSize:12, marginTop: 10}}>90 SEK per person</Text>
                  </View>
                 </View>
          </View> 
          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 170 }}>
                    <Image source={{
              uri: this.state.Saved[2].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                    <Text style={{color:'black', fontSize:8, marginTop: 10}}>ENTIRE APARTMENT- 1 BEDROOM</Text>
                  <Text style={{color:'#2f4f4f', fontSize:15, marginTop: 10}}>Centric Studio with roof top terrace</Text>
                  <Text style={{color:'#808080', fontSize:12, marginTop: 10}}>95 SEK per person</Text>
                  </View>
                 </View>
          </View>
          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 170 }}>
                    <Image source={{
              uri: this.state.Saved[4].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  <Text style={{color:'black', fontSize:8, marginTop: 10}}>ENTIRE APARTMENT- 1 BEDROOM</Text>
                  <Text style={{color:'#2f4f4f', fontSize:15, marginTop: 10}}>Centric Studio with roof top terrace</Text>
                  <Text style={{color:'#808080', fontSize:12, marginTop: 10}}>75 SEK per person</Text>
                  </View>
                 </View>
          </View>

        </ScrollView>  
        </View>
        </View>
      
      

    );
  }
}

const styles = StyleSheet.create({
 subCategories: {
    height: 170,
    width: 130,
    backgroundColor: "transparent",
    margin: 10,
    borderColor: "transparent",
    borderRadius: 5
  }

})


export default SavedList;
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { explores } from '../../components/data/DataSample'
class SavedScreen extends Component {
    state = {
        Explore: explores
    }

    render() {
        return (
            <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <Text style={styles.textStyle}> {this.state.Explore[1].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.Explore[1].img}}
                    style={styles.imageStyle}>
                </Image>
                </View>

                <Text style={styles.textStyle}> {this.state.Explore[2].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.Explore[2].img}}
                    style={styles.imageStyle}></Image>
                </View>

                <Text style={styles.textStyle}> {this.state.Explore[4].name}</Text>
                <View style={styles.container}>
                    <Image source={{uri: this.state.Explore[4].img}}
                    style={styles.imageStyle}></Image>
                </View>

                
            </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    textStyle: {

        color: "#2f4f4f",
        fontWeight: "normal",
        fontSize: 30,
        marginLeft: 13,
        marginTop: 10,
        marginBottom: 15
    },
    imageStyle: {
        width: 320,
        height: 200,
        
    }
});

export default SavedScreen;


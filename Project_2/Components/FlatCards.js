import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function FlatCards(){

    return (
      <View>
        <Text style={styles.headingText} > Flat Cards </Text>
        <View style={styles.container} >
            <View style={[styles.card,styles.cardOne]} >
                <Text>Red</Text>
            </View>
            <View style={[styles.card,styles.cardTwo]} >
                <Text>Blue</Text>
            </View>
            <View style={[styles.card,styles.cardThree]} >
                <Text>Green</Text>
            </View>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    headingText:{
        fontSize:22,
        fontWeight:"bold",
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        backgroundColor:"red",
        margin:8,
        borderRadius:8
    },
    cardOne:{
        backgroundColor:"red"
    },
    cardTwo:{
        backgroundColor:"blue"
    },
    cardThree:{
        backgroundColor:"green"
    }
});


import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCards() {

    return (

        <View>
            <Text style={styles.headingText} >  Elevated Cards </Text>
            <View style={styles.wrapper}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>1</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>2</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>3</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>4</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]}>
                        <Text>5</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>6</Text>
                    </View>
                    <View style={[styles.card, styles.cardElevated]} >
                        <Text>7</Text>
                    </View>

                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    wrapper:{
        padding:8
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        backgroundColor: "red",
        margin: 8,
        borderRadius: 8
    },
    cardElevated: {
        backgroundColor: "grey",
        elevation: 5,
        shadowColor: "#333",
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },


});

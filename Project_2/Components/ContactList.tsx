import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'

const contacts = [
    {
        uid: 1,
        name: 'Hitesh Choudhary',
        status: 'Just an extra ordinary teacher',
        imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
        uid: 2,
        name: 'Anurag Tiwari',
        status: 'I ❤️ To Code and Teach!',
        imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
        uid: 3,
        name: 'Sanket Singh',
        status: 'Making your GPay smooth',
        imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
        uid: 4,
        name: 'Anirudh Jwala',
        status: 'Building secure Digital banks',
        imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
        uid: 5,
        name: 'Hitesh Choudhary',
        status: 'Just an extra ordinary teacher',
        imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
        uid: 6,
        name: 'Anurag Tiwari',
        status: 'I ❤️ To Code and Teach!',
        imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
        uid: 7,
        name: 'Sanket Singh',
        status: 'Making your GPay smooth',
        imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
        uid: 8,
        name: 'Anirudh Jwala',
        status: 'Building secure Digital banks',
        imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
];



export default function ContactList() {

    return (
        <View>
            <Text style={styles.headingText}>
                Conatct List
            </Text>
            <ScrollView style={styles.container}  >
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard} >
                        <Image style={styles.userImage} source={{ uri: imageUrl }} />
                        <View  >
                            <Text style={styles.userName} >
                                {name}
                            </Text>
                            <Text style={styles.userStatus} >
                                {status}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )

}



const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 20
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4,
        paddingVertical:10
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        padding:8,
        borderRadius:10,
        backgroundColor:"#344237e6",
        marginVertical:6
    },
    userName: {
        fontSize:16,
        fontWeight:"600",
        color:"#fff",
        marginBottom:2

    },
    userImage:{
        height:50,
        width:50,
        borderRadius:60/2,
        marginRight:14,
    },
    userStatus: {
        fontSize:14,
    }

});
import React, { Component } from 'react'
import { Linking, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function ActionCard() {

  function openWebsite(weblink: string) {
    Linking.openURL(weblink);
  }


  return (
    <>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]} >
        <View style={styles.headingContainer} >
          <Text style={styles.headerText} >Header Text</Text>
        </View>
        <Image style={styles.cardImage} source={{ uri: "data:image/jpeg;base64,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" }} />
        <View style={styles.bodyContainer} >
          <Text numberOfLines={3} >
            When I set up the Wikimedia Foundation as a nonprofit to host Wikipedia and 12 other free knowledge projects, it meant that we could preserve our core values: neutral, high quality information, not outrage and sensationalism. Being a nonprofit means there is no danger that someone will buy Wikipedia and turn it into their personal space.
          </Text>
        </View>
        <View style={styles.footerContainer} >
          <TouchableOpacity onPress={() => openWebsite("https://pratikpisudde.netlify.app")} >
            <Text  style={styles.socialLinks} >
              Visit
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </>

  )
}


const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20
  },
  card: {
    height: 380,
    width: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: "black"
  },
  cardElevated: {
    elevation: 5,
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  cardImage: {
    height: 190
  },
  bodyContainer: {
    paddingHorizontal:20,
    paddingVertical:15
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent:"center"
  },
  socialLinks: {
    fontSize:15,
    fontWeight:"600",
    backgroundColor: "blue",
    paddingHorizontal:60,
    paddingVertical:10,
    borderRadius: 6,
  }

});


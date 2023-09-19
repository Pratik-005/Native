import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function FancyCards() {

    return (
        <>
            <Text style={styles.headingText} > Trending Places </Text>
            <View style={[styles.card, styles.cardElevated]} >
                <Image style={styles.cardImage} source={{ uri: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700" }} />
                <View style={styles.cardBody} >
                    <Text style={styles.cardTitle} >Taj Mahal</Text>
                    <Text style={styles.cardLabel} >
                        1632
                    </Text>
                    <Text style={styles.cardDesc}  >
                        An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.
                    </Text>
                    <Text style={styles.cardFooter} >
                        12 min ago 
                    </Text>

                </View>
            </View>

            <View style={[styles.card, styles.cardElevated]} >
                <Image style={styles.cardImage} source={{ uri: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700" }} />
                <View style={styles.cardBody} >
                    <Text style={styles.cardTitle} >Taj Mahal</Text>
                    <Text style={styles.cardLabel} >
                        1632
                    </Text>
                    <Text style={styles.cardDesc}  >
                        An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.
                    </Text>
                    <Text style={styles.cardFooter} >
                        12 min ago 
                    </Text>

                </View>
            </View>

            <View style={[styles.card, styles.cardElevated]} >
                <Image style={styles.cardImage} source={{ uri: "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/taj-mahal-202004-1587656298.jpg?impolicy=Medium_Widthonly&w=700" }} />
                <View style={styles.cardBody} >
                    <Text style={styles.cardTitle} >Taj Mahal</Text>
                    <Text style={styles.cardLabel} >
                        1632
                    </Text>
                    <Text style={styles.cardDesc}  >
                        An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife.
                    </Text>
                    <Text style={styles.cardFooter} >
                        12 min ago 
                    </Text>

                </View>
            </View>
        </>


    )
}


const styles = StyleSheet.create({
    headingText: {
        fontSize: 22,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    card: {
        height: 360,
        width: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor:"#ffffff"
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
    cardLabel:{
        color:"#000000",
        fontSize:14,
        marginBottom:2
    },
    cardImage: {
        height: 180,
        marginBottom: 18,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4
    },
    cardDesc: {
        color: "#000000",
        fontSize: 15,
        marginVertical: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: "#000000"
    }

});
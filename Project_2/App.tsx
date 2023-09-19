
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import ActionCard from './Components/ActionCard';
import ContactList from './Components/ContactList';



function App(): JSX.Element {

  return (
    <SafeAreaView  >
      <ScrollView showsVerticalScrollIndicator={false} >
        <Text style={styles.heading} >App</Text>
        <FlatCards />
        <ElevatedCards/>
        <FancyCards/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  heading:{
    color:"white",
    textAlign:"center",
    backgroundColor:"black",
    padding:8,
    fontWeight:"bold",
    fontSize:30,
    borderWidth:1,
    borderBottomColor:"white",
    marginBottom:25
  }
})


export default App;

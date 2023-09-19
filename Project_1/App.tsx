import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';


function App(): JSX.Element {

  return (
    <SafeAreaView style={Styles.container} >
     <Text style={Styles.heading} >
        Pratik Pisudde
     </Text>
     <Text style={Styles.subtitle} >
      The Next Gen Coder 
     </Text>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
    heading:{
      fontSize : 45 ,
      fontWeight:'bold',
      color :'white',
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'black',
    },
    subtitle:{
      fontSize:25,
      color:'white',
      fontFamily:'cursive',
      marginVertical:15,
    }
})


export default App;

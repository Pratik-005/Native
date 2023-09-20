
import React, { useState } from 'react';
import * as Yup from 'yup';
import { FastField, Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Image,
  useColorScheme
} from 'react-native';

import Clipboard from '@react-native-clipboard/clipboard';

const PasswordScema = Yup.object().shape({
  passLength: Yup.number().
    min(4, "should contain at least 4 characters").
    max(16, "should conatin at most 16 characters").
    required("password is required")
});



function App(): JSX.Element {

  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [copiedText, setCopiedText] = useState('');
  const [copied,setCopied] = useState(false);





  const generatePassString = (passLength: number) => {
    let charList = "";
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (uppercase) {
      charList += upperCaseChars;
    }
    if (lowercase) {
      charList += lowerCaseChars;
    }
    if (numbers) {
      charList += digitChars;
    }
    if (symbols) {
      charList += specialChars;
    }

    const passResult = createPassword(charList, passLength);
    console.log(passResult);
    setPassword(passResult);
    setIsPassGenerated(true);
    Keyboard.dismiss();

  }

  const createPassword = (characterString: string, passLenth: number): string => {
    let result = "";
    for (let i = 0; i < passLenth; i++) {
      const charIndex = Math.round(Math.random() * characterString.length);
      result += characterString.charAt(charIndex);
    }
    return result;
  }


  const resetPassState = () => {
    setPassword("");
    setIsPassGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setNumbers(false);
    setSymbols(false);
    setCopied(false);
  }


  return (

    <ScrollView keyboardShouldPersistTaps="handled"  >
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer} >
          < Text style={styles.title}>
            Password Generator
          </Text>
          <Formik initialValues={{ passLength: "" }} validationSchema={PasswordScema}
            onSubmit={values => {
              console.log(values);
              generatePassString(+values.passLength);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset
            }) => (<>
              <View style={[styles.inputWrapper, styles.takeinput]} >
                <View style={styles.inputColumn} >
                  <Text style={styles.heading} >
                    Enter the Password Length
                  </Text>
                </View>
                <TextInput style={styles.inputStyle} value={values.passLength} onChangeText={handleChange('passLength')} placeholder='' keyboardType='numeric' />
                {
                  touched.passLength && errors.passLength && (
                    <Text style={styles.errorText} >
                      {errors.passLength}
                    </Text>
                  )
                }
              </View>

              <View style={styles.inputWrapper} >
                <Text style={styles.heading} >
                  Include Lowercase
                </Text>
                <BouncyCheckbox disableBuiltInState isChecked={lowercase} onPress={() => setLowercase(!lowercase)} fillColor="green" />
              </View>

              <View style={styles.inputWrapper} >
                <Text style={styles.heading} >
                  Include UpperCase
                </Text>
                <BouncyCheckbox disableBuiltInState isChecked={uppercase} onPress={() => setUppercase(!uppercase)} fillColor="green"  />
              </View>

              <View style={styles.inputWrapper} >
                <Text style={styles.heading} >
                  Include Digits
                </Text>
                <BouncyCheckbox disableBuiltInState isChecked={numbers} onPress={() => setNumbers(!numbers)} fillColor="green" />
              </View>

              <View style={styles.inputWrapper} >
                <Text style={styles.heading} >
                  Include Special Characters
                </Text>
                <BouncyCheckbox disableBuiltInState isChecked={symbols} onPress={() => setSymbols(!symbols)} fillColor="green" />
              </View>

              <View style={styles.formActions} >
              <TouchableOpacity style={styles.secondaryBtn} onPress={() => { handleReset(); resetPassState(); }} >
                  <Text style={styles.secondaryBtnTxt} >
                    Reset
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} onPress={() => handleSubmit()}>
                  <Text style={styles.primaryBtnTxt} >
                    Generate
                  </Text>
                </TouchableOpacity>
                
              </View>
            </>
            )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]} >
            <Text selectable={true} style={styles.generatedPass} >
              {password}
            </Text>
            <TouchableOpacity onPress={()=>{ Clipboard.setString(password);
              setCopied(!copied)}} >
              <Image style={styles.clipboard}  source={ copied ?  require("./assets/copied.png") : require("./assets/copy.png") } />  
            </TouchableOpacity>
          </View>) : null}

      </SafeAreaView>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  formContainer: {
    margin: 8,
    padding: 22
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 60,
    textAlign: "center",
    borderBottomColor:"#666b77",
    paddingBottom:15,
    borderBottomWidth:0.8,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  takeinput: {
    flexDirection: "column",
    alignItems:"flex-start",
    marginBottom:30
  },
  inputColumn: {
    flexDirection: "column",

  },
  heading: {
    fontSize: 15
  }, errorText: {
    fontSize: 12,
    color: "#ff0d10"
  },
  inputStyle: {
    width:"100%",
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#d9dce1",
    marginVertical:10
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:40

  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5da3fa"
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"

  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5da3fa"
  },
  secondaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  card: {
    padding:4,
    paddingTop:14,
    width:"85%",
    borderRadius: 6,
    marginHorizontal: 12,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignSelf:"center",
  },
  cardElevated: {
    backgroundColor: "#fff",
    elevation: 1,
    shadowOffset: {
      height: 1.2,
      width: 1.2
    },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  generatedPass: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 12,
    color: "#000"
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2
  },
  desc: {
    color: "#758283",
    marginBottom: 8
  },
  clipboard:{
    width:25,
    height:25,
    marginHorizontal:15,
    marginTop:3
  }
});

export default App;

import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableWithoutFeedback, Keyboard, Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { colors } from "../styling/appTheme";
import { vh } from "react-native-expo-viewport-units";
import firebaseApp from "../../src/firebase/config";

export function EditProfilePage({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = () => {
    firebaseApp.signInWithEmailAndPassword();
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", height: "100%", paddingTop: 30 }}>
        <View style={{ position: "absolute", top: 0, left: 0, display: "flex", width: "100%", height: vh(35), backgroundColor: colors.secondary, paddingTop: 50,
          borderBottomLeftRadius: 10, borderBottomRightRadius: 10
        }} />
        <View style={{ display: "flex", alignItems: "center", width: "90%", minHeight: vh(65), backgroundColor: "white", borderWidth: 0, borderRadius: 20,
          elevation: 2,
          shadowColor: "black",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", height: 160 }}>
            <MaterialCommunityIcons name="account" color={"black"} size={50} style={{ marginRight: 20 }} />
            <TouchableOpacity activeOpacity='0.5'
              style={{ backgroundColor: colors.tertiary, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, borderRadius: 10 }}
            >
              <Text style={{ color: "white" }}>Edit Profile Photo</Text>
            </TouchableOpacity>
          </View>

          <TextInput 
            placeholder='First Name' 
            placeholderTextColor="grey" 
            style={{
              width: "84%",
              height: 50,
              backgroundColor: colors.primary,
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 2,
              margin: 5,
            }} 
            keyboardType='default' 
            textContentType='name' 
            onChangeText={(fName) => setFirstName(fName)}
          />
          <TextInput 
            placeholder='Last Name' 
            placeholderTextColor="grey" 
            style={{
              width: "84%",
              height: 50,
              backgroundColor: colors.primary,
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 2,
              margin: 5,
            }} 
            keyboardType='default' 
            textContentType='name' 
            onChangeText={(lName) => setLastName(lName)}
          />
          <TextInput 
            placeholder='Email' 
            placeholderTextColor="grey" 
            style={{
              width: "84%",
              height: 50,
              backgroundColor: colors.primary,
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgrey",
              borderRadius: 2,
              margin: 5,
            }} 
            keyboardType='email-address' 
            autoCapitalize='none' 
            textContentType='emailAddress' 
            onChangeText={(email) => setEmail(email)}
          />
          <TouchableOpacity activeOpacity='0.5'
            onPress={() => handleOnSubmit()}
            style={{ width: "50%", backgroundColor: colors.tertiary, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, borderRadius: 10, margin: 20 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export function EditProfilePageHeader(props) {
  return (
    <View style={{ position: "relative", display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 50, paddingLeft: 20, backgroundColor: colors.secondary }}>
      <MaterialCommunityIcons name="chevron-left" color={"white"} size={30} style={{ marginRight: 20 }} onPress={() => props?.navigation?.goBack()} />
      <MaterialCommunityIcons name="account" color={"white"} size={30} style={{ marginRight: 20 }} />
      <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }}>Placeholder username</Text>
    </View>
  )
}
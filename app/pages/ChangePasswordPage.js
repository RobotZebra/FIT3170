import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, Button, TouchableOpacity, TextInput } from "react-native";
import { colors } from "../styling/appTheme";
import { vw, vh } from 'react-native-expo-viewport-units'; 

export function ChangePasswordPage({ navigation }) {
  return (
    <View style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", height: "100%", paddingTop: 30 }}>
      <View style={{ position: "absolute", top: 0, left: 0, display: "flex", width: "100%", height: vh(45), backgroundColor: colors.secondary, paddingTop: 50,
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
      }} />
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "90%", minHeight: vh(45), backgroundColor: "white", borderWidth: 0, borderRadius: 20,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <TextInput 
          placeholder='Enter Old Password' 
          placeholderTextColor="grey" 
          style={{
            width: "84%",
            height: 50,
            backgroundColor: colors.primary,
            padding: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 2,
            margin: 15,
          }} 
          keyboardType='default' 
        />
        <TextInput 
          placeholder='Enter New Password' 
          placeholderTextColor="grey" 
          style={{
            width: "84%",
            height: 50,
            backgroundColor: colors.primary,
            padding: 10,
            borderWidth: 1,
            borderColor: "lightgrey",
            borderRadius: 2,
            margin: 15,
          }} 
          keyboardType='default' 
        />
        <TouchableOpacity activeOpacity='0.5'
          style={{ width: "60%", backgroundColor: colors.tertiary, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, borderRadius: 10, margin: 20 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export function ChangePasswordPageHeader(props) {
  return (
    <View style={{ position: "relative", display: "flex", flexDirection: "row", alignItems: "center", paddingTop: 50, paddingLeft: 20, backgroundColor: colors.secondary }}>
      <MaterialCommunityIcons name="chevron-left" color={"white"} size={30} style={{ marginRight: 20 }} onPress={() => props?.navigation?.goBack()} />
      <MaterialCommunityIcons name="account-key" color={"white"} size={30} style={{ marginRight: 20 }} />
      <Text style={{ color: "white", fontSize: 22, fontWeight: 'bold' }}>Change Password</Text>
    </View>
  )
}
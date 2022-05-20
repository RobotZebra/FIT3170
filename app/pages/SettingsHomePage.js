import React from "react";
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors } from "../styling/appTheme";

export function SettingsHomePage({ navigation }) {
  return (
    <View style={{ position: "relative", display: "flex", alignItems: "center", width: "100%", height: "100%", paddingTop: 30 }}>
      <View style={{ position: "absolute", top: 0, left: 0, display: "flex", width: "100%", height: "45%", backgroundColor: colors.secondary, paddingTop: 50,
        borderBottomLeftRadius: 10, borderBottomRightRadius: 10
      }} />
      <View style={{ display: "flex", alignItems: "center", width: "90%", minHeight: "60%", backgroundColor: "white", borderWidth: 0, borderRadius: 20, paddingVertical: 20, 
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", height: 80, paddingLeft: 30,
          borderBottomColor: "lightgrey",
          borderBottomWidth: 1,
        }}>
          <MaterialCommunityIcons name="account" size={30}></MaterialCommunityIcons>
          <Text>Placeholder Name</Text>
        </View>

        <View style={{ display: "flex", justifyContent: "center", width: "100%", height: 140, paddingHorizontal: 20, borderBottomColor: "lightgrey", borderBottomWidth: 1, marginBottom: 20 }}>
          <TouchableOpacity 
            onPress={() => { navigation.navigate('Dashboard'); }} 
            activeOpacity='0.5'
            disabled
          >
            <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ color: "lightgrey" }}>Account Settings</Text>
              <MaterialCommunityIcons name="chevron-right" size={30} style={{ color: "lightgrey" }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => { navigation.navigate('EditProfile'); }} 
            activeOpacity='0.5'
          >
            <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
              <Text>Edit Profile</Text>
              <MaterialCommunityIcons name="chevron-right" size={30} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => { navigation.navigate('ChangePassword'); }} 
            activeOpacity='0.5'
          >
            <View style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
              <Text>Change Password</Text>
              <MaterialCommunityIcons name="chevron-right" size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", paddingHorizontal: 20}}>
          <TouchableOpacity activeOpacity='0.5'
            style={{ width: "60%", backgroundColor: colors.tertiary, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, borderRadius: 10, marginBottom: 10 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity='0.5'
            style={{ width: "60%", backgroundColor: colors.tertiary, paddingTop: 10, paddingRight: 20, paddingBottom: 10, paddingLeft: 20, borderRadius: 10 }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

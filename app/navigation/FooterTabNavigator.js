import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTopBarNavigator from "./HomeTopBarNavigation";
import HealthTopBarNavigator from "./HealthTopBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import WikiTopBarNavigator from "./WikiTopBarNavigator";

import { Entypo } from "@expo/vector-icons";

import firebaseApp from "../../src/firebase/config.js";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
const Tab = createBottomTabNavigator();

function Settings() {
  const [shopminders, setShopminders] = useState([]);

  useEffect(async () => {
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "test-collection"));

    const querySnapshot = await getDocs(q);
    const objs = [];
    querySnapshot.forEach((doc) => {
      objs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setShopminders(objs);
    console.log(objs);
  }, []);
  return (
    <View>
      {shopminders.map((obj) => (
        <View key={obj.id}>
          <Text>{obj.name}</Text>
        </View>
      ))}
    </View>
  );
}

function MyHeader({ title, style }) {
  return (
    <View style={style}>
      <Text style={footerTabStyles.title}>{title}</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: "#91298D",
        tabBarIndicatorStyle: { backgroundColor: "#91298D" },
        tabBarActiveTintColor: "#91298D",
        header: ({ route }) => {
          const title = route.name;

          return (
            <MyHeader
              title={title}
              style={{
                fontFamily: "Roboto_400Regular",
                padding: 20,
                backgroundColor: "#91298D",
                color: "white",
                height: 100,
              }}
            />
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTopBarNavigator}
        options={{
          fontFamily: "Roboto_400Regular",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={WikiTopBarNavigator}
        options={{
          fontFamily: "Roboto_400Regular",
          tabBarLabel: "Wiki",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hospital"
        component={HospitalTopBarNavigator}
        options={{
          fontFamily: "Roboto_400Regular",
          tabBarLabel: "Hospital",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/MH-logo-grey.png")}
              style={{
                width: size,
                height: size,
                alignContent: "center",
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          fontFamily: "Roboto_400Regular",
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
//export default MyTabs;

export default function BottomTabNavigator() {
  return (
    // <NavigationContainer>
    <MyTabs />
    // </NavigationContainer>
  );
}

const footerTabStyles = StyleSheet.create({
  heading: {
    alignItems: "center",
    flex: 1,
    height: 200,
  },
  title: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    fontWeight: "500",
    fontSize: 25,
    paddingTop: 30,
  },
});

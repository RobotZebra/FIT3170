import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TopTab = createMaterialTopTabNavigator();

function MyPregnancy() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
    </View>
  );
}

function Appointments() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Appointments tab</Text>
    </View>
  );
}

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="MyPregnancy"
      tabBarOptions={{
        activeTintColor: "#91298D",
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: "white" },
        indicatorStyle: { backgroundColor: "#91298D" },
      }}
    >
      <TopTab.Screen
        name="MyPregnancy"
        component={MyPregnancy}
        options={{ tabBarLabel: "My Pregnancy" }}
      />

      <TopTab.Screen
        name="Appointments"
        component={Appointments}
        options={{ tabBarLabel: "Appointments" }}
      />
    </TopTab.Navigator>
  );
}

export default function HomeTopBarNavigator() {
  return <MyTopTabs />;
}

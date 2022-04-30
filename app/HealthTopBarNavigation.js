import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TopTab = createMaterialTopTabNavigator();

function Facilities() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Facilities tab</Text>
    </View>
  );
}

function Practitioners() {
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
      initialRouteName="Facilities"
      tabBarOptions={{
        activeTintColor: "#91298D",
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: "white" },
        indicatorStyle: { backgroundColor: "#91298D" },
      }}
    >
      <TopTab.Screen
        name="Facilities"
        component={Facilities}
        options={{ tabBarLabel: "Facilities" }}
      />

      <TopTab.Screen
        name="Practitioners"
        component={Practitioners}
        options={{ tabBarLabel: "Practitioners" }}
      />
    </TopTab.Navigator>
  );
}

export default function HealthTopBarNavigator() {
  return <MyTopTabs />;
}

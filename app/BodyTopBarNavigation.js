import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TopTab = createMaterialTopTabNavigator();

function Nutrition() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Nutrition tab</Text>
    </View>
  );
}

function Complications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Complications tab</Text>
    </View>
  );
}

function Tests() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Tests tab</Text>
    </View>
  );
}

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Nutrition"
      tabBarOptions={{
        activeTintColor: "#91298D",
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: "white" },
        indicatorStyle: { backgroundColor: "#91298D" },
      }}
    >
      <TopTab.Screen
        name="Nutrition"
        component={Nutrition}
        options={{ tabBarLabel: "Nutrition" }}
      />

      <TopTab.Screen
        name="Complications"
        component={Complications}
        options={{ tabBarLabel: "Complications" }}
      />

      <TopTab.Screen
        name="Tests"
        component={Tests}
        options={{ tabBarLabel: "Tests" }}
      />
    </TopTab.Navigator>
  );
}

export default function BodyTopBarNavigator() {
  return <MyTopTabs />;
}

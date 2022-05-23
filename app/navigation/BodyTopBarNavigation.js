import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NutritionPage } from "../pages/NutritionPage";
import { ComplicationsPage } from "../pages/ComplicationsPage";
import { TestsPage } from "../pages/TestsPage";

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Nutrition"
      screenOptions={{
        activeTintColor: "#91298D",
        tabBarIndicatorStyle: {backgroundColor: "#91298D"},
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: "white" },
        indicatorStyle: { backgroundColor: "#91298D" },
      }}
    >
      <TopTab.Screen
        name="Nutrition"
        component={NutritionPage}
        options={{ tabBarLabel: "Nutrition" }}
      />

      <TopTab.Screen
        name="Complications"
        component={ComplicationsPage}
        options={{ tabBarLabel: "Complications" }}
      />

      <TopTab.Screen
        name="Tests"
        component={TestsPage}
        options={{ tabBarLabel: "Tests" }}
      />
    </TopTab.Navigator>
  );
}

export default function BodyTopBarNavigator() {
  return <MyTopTabs />;
}

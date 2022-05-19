import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NutritionPage } from "../pages/NutritionPage";
import BabyPage from "../pages/BabyPage";
import MotherPage from "../pages/MotherPage";
import HealthcarePage from "../pages/HealthcarePage";
import { ComplicationsPage } from "../pages/ComplicationsPage";
import { TestsPage } from "../pages/TestsPage";

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Baby"
      tabBarOptions={{
        activeTintColor: "#91298D",
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: "white" },
        indicatorStyle: { backgroundColor: "#91298D" },
      }}
    >
      <TopTab.Screen
        name="Baby"
        component={BabyPage}
        options={{ tabBarLabel: "Baby" }}
      />

      <TopTab.Screen
        name="Mother"
        component={MotherPage}
        options={{ tabBarLabel: "Mother" }}
      />

      <TopTab.Screen
        name="Healthcare"
        component={HealthcarePage}
        options={{ tabBarLabel: "Healthcare" }}
      />
    </TopTab.Navigator>
  );
}

export default function BodyTopBarNavigator() {
  return <MyTopTabs />;
}

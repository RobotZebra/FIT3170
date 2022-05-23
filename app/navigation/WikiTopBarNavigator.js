import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BabyPage from "../pages/BabyPage";
import MotherPage from "../pages/MotherPage";
import HealthcarePage from "../pages/HealthcarePage";

const TopTab = createMaterialTopTabNavigator();

export default function WikiTopBarNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Baby"
      tabBarOptions={{
        activeTintColor: "#91298D",
        labelStyle: { fontSize: 12 },
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

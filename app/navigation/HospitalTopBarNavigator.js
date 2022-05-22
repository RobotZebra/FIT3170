import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FacilitiesPage } from "../pages/FacilitiesPage";
import { PractitionersPage } from "../pages/PractitionersPage";

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Facilities"
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
        name="Facilities"
        component={FacilitiesPage}
        options={{ tabBarLabel: "Facilities" }}
      />

      <TopTab.Screen
        name="Practitioners"
        component={PractitionersPage}
        options={{ tabBarLabel: "Practitioners" }}
      />
    </TopTab.Navigator>
  );
}

export default function HospitalTopBarNavigator() {
  return <MyTopTabs />;
}

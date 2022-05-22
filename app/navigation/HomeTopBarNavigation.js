import React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyPregnancyPage } from "../pages/MyPregnancyPage";
import { AppointmentsPage } from "../pages/AppointmentsPage";

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="MyPregnancy"
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
        name="MyPregnancy"
        component={MyPregnancyPage}
        options={{ tabBarLabel: "My Pregnancy" }}
      />

      <TopTab.Screen
        name="Appointments"
        component={AppointmentsPage}
        options={{ tabBarLabel: "Appointments" }}
      />
    </TopTab.Navigator>
  );
}

export default function HomeTopBarNavigator() {
  return <MyTopTabs />;
}

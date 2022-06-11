import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TestsScreen from '~/screens/TestsScreen';
import NutritionScreen from '~/screens/NutritionScreen';
import ComplicationsScreen from '~/screens/ComplicationsScreen';

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Nutrition"
      screenOptions={{
        activeTintColor: '#91298D',
        tabBarIndicatorStyle: { backgroundColor: '#91298D' },
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: '#91298D' },
      }}>
      <TopTab.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{ tabBarLabel: 'Nutrition' }}
      />

      <TopTab.Screen
        name="Complications"
        component={ComplicationsScreen}
        options={{ tabBarLabel: 'Complications' }}
      />

      <TopTab.Screen name="Tests" component={TestsScreen} options={{ tabBarLabel: 'Tests' }} />
    </TopTab.Navigator>
  );
}

export default function BodyTopBarNavigator() {
  return <MyTopTabs />;
}

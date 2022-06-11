import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyPregnancyScreen from '~/screens/MyPregnancyScreen';
import AppointmentsScreen from '~/screens/AppointmentsScreen';

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="MyPregnancy"
      screenOptions={{
        activeTintColor: '#91298D',
        tabBarIndicatorStyle: { backgroundColor: '#91298D' },
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: '#91298D' },
      }}>
      <TopTab.Screen
        name="MyPregnancy"
        component={MyPregnancyScreen}
        options={{ tabBarLabel: 'My Pregnancy' }}
      />

      <TopTab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{ tabBarLabel: 'Appointments' }}
      />
    </TopTab.Navigator>
  );
}

export default function HomeTopBarNavigator() {
  return <MyTopTabs />;
}

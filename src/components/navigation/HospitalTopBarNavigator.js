import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FacilitiesScreen from '~/screens/FacilitiesScreen';
import PractitionersScreen from '~/screens/PractitionersScreen';

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  //const insets = useSafeAreaInsets();
  return (
    <TopTab.Navigator
      initialRouteName="Facilities"
      screenOptions={{
        activeTintColor: '#91298D',
        tabBarIndicatorStyle: { backgroundColor: '#91298D' },
        labelStyle: { fontSize: 12 },
        // style: { backgroundColor: "white", marginTop: insets.top },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: '#91298D' },
      }}>
      <TopTab.Screen
        name="Facilities"
        component={FacilitiesScreen}
        options={{ tabBarLabel: 'Facilities' }}
      />

      <TopTab.Screen
        name="Practitioners"
        component={PractitionersScreen}
        options={{ tabBarLabel: 'Practitioners' }}
      />
    </TopTab.Navigator>
  );
}

export default function HospitalTopBarNavigator() {
  return <MyTopTabs />;
}

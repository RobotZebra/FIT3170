import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BabyScreen from '~/screens/BabyScreen';
import MotherScreen from '~/screens/MotherScreen';
import HealthcareScreen from '~/screens/HealthcareScreen';

const TopTab = createMaterialTopTabNavigator();

export default function WikiTopBarNavigator() {
  return (
    <TopTab.Navigator
      initialRouteName="Baby"
      screenOptions={{
        activeTintColor: '#91298D',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'white' },
        indicatorStyle: { backgroundColor: '#91298D' },
        tabBarIndicatorStyle: { backgroundColor: '#91298D' },
      }}>
      <TopTab.Screen name="Baby" component={BabyScreen} options={{ tabBarLabel: 'Baby' }} />

      <TopTab.Screen name="Mother" component={MotherScreen} options={{ tabBarLabel: 'Mother' }} />

      <TopTab.Screen
        name="Healthcare"
        component={HealthcareScreen}
        options={{ tabBarLabel: 'Healthcare' }}
      />
    </TopTab.Navigator>
  );
}

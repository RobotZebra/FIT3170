import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '~/pages/LoginScreen';
import RegisterScreen from '~/pages/RegisterScreen';
import ResetPasswordScreen from '~/pages/ResetPasswordScreen';
import BottomTabNavigator from '~/components/navigation/FooterTabNavigator';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

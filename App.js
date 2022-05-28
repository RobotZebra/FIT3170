import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '~/components/navigation/FooterTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from '~/pages/LoginScreen';
import RegisterScreen from '~/pages/RegisterScreen';
import ResetPasswordScreen from '~/pages/ResetPasswordScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import Roboto from '~/components/fonts/Roboto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Roboto>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Reset" component={ResetPasswordScreen} />
              <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </Roboto>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

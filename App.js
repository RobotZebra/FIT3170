import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import MyTabs from "./app/FooterTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import BodyTopBarNavigator from "./app/navigation/BodyTopBarNavigation.js";
import BottomTabNavigator from "./app/navigation/FooterTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./app/pages/LoginScreen";
import RegisterScreen from "./app/pages/RegisterScreen";
import ResetPasswordScreen from "./app/pages/ResetPasswordScreen";
import GuestScreen from "./app/pages/GuestScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootSiblingParent } from 'react-native-root-siblings';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    ReactDOM.render(
      <React.StrictMode>
        <Provider store = { store }>
          <SafeAreaProvider>
            <RootSiblingParent>
              <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Register" component={RegisterScreen} />
                  <Stack.Screen name="Reset" component={ResetPasswordScreen} />
                  <Stack.Screen name="Guest" component={GuestScreen} />
                  <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
                </Stack.Navigator>
              </NavigationContainer>
            </RootSiblingParent>
          </SafeAreaProvider>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

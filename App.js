import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import MyTabs from "./app/FooterTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import BodyTopBarNavigator from "./app/navigation/BodyTopBarNavigation.js";
import BottomTabNavigator from "./app/navigation/FooterTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./app/pages/LoginScreen";
import RegisterScreen from "./app/pages/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import MyTabs from "./app/FooterTabNavigator.js";
import { NavigationContainer } from "@react-navigation/native";
import BodyTopBarNavigator from "./app/navigation/BodyTopBarNavigation.js";
import BottomTabNavigator from "./app/navigation/FooterTabNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <BottomTabNavigator />
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

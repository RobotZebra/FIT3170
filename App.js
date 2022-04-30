import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
=======
import MyTabs from "./app/FooterTabNavigator.js";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
>>>>>>> e0b37fd42178954622fdd953b1fc50a87679edd1
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

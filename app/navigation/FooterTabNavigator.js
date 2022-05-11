import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from "../components/NutritionNavigationBar";
import HomeTopBarNavigator from "./HomeTopBarNavigation";
import BodyTopBarNavigator from "./BodyTopBarNavigation";
import HospitalTopBarNavigator from "./HospitalTopBarNavigation";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function Home() {
  return <View></View>;
}
function Body() {
  return <View>{/* <NavigationBar></NavigationBar> */}</View>;
}
function Hospital() {
  return <View></View>;
}

function Settings() {
  return <View></View>;
}

function MyHeader({ title, style }) {
  return (
    <View style={style}>
      <Text style={footerTabStyles.title}>
        {title}
      </Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#91298D",
        header: ({ navigation, route, options }) => {
          const title = route.name;

          return (
            <MyHeader
              title={title}
              style={{
                padding: 20,
                backgroundColor: "#91298D",
                color: "white",
                height: 100,
              }}
            />
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTopBarNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Body"
        component={BodyTopBarNavigator}
        options={{
          tabBarLabel: "Body",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hospital"
        component={HospitalTopBarNavigator}
        options={{
          tabBarLabel: "Hospital",
          tabBarIcon: ({ color, size }) => (
            
            <Image
            source={require('../../assets/MH-logo-grey.png')} 
            style={{
              width: size,
              height: size,
              alignContent: "center"
            }}
            
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
//export default MyTabs;

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const footerTabStyles = StyleSheet.create({
  heading: {
    alignItems: "center",
    flex: 1,
    height: 200
  },
  title: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: '500',
    fontSize: 25,
    paddingTop: 30
  },
});

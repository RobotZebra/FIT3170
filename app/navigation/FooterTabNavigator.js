import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTopBarNavigator from "./HomeTopBarNavigation";
import HealthTopBarNavigator from "./HealthTopBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import WikiTopBarNavigator from "./WikiTopBarNavigator";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Home() {
  return <View></View>;
}
function Body() {
  return <View>{/* <NavigationBar></NavigationBar> */}</View>;
}
function Health() {
  return <View></View>;
}

function Settings() {
  return <View></View>;
}

function MyHeader({ title, style }) {
  return (
    <View style={style}>
      <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
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
                height: 70,
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
        name="Wiki"
        component={WikiTopBarNavigator}
        options={{
          tabBarLabel: "Wiki",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="open-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Health"
        component={HealthTopBarNavigator}
        options={{
          tabBarLabel: "Health",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="hospital-box"
              color={color}
              size={30}
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

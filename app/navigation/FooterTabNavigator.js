import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeTopBarNavigator from "./HomeTopBarNavigation";
import BodyTopBarNavigator from "./BodyTopBarNavigation";
import HealthTopBarNavigator from "./HealthTopBarNavigation";
import SettingsStackNavigation from "./SettingsStackNavigation";

const Tab = createBottomTabNavigator();

function DefaultHeader({ title, style }) {
  return (
    <View style={style}>
      <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
        {title}
      </Text>
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#91298D",
        tabBarHideOnKeyboard: true,
        header: ({ navigation, route, options }) => {
          const title = route.name;
          
          return (
            <DefaultHeader
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
        component={SettingsStackNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



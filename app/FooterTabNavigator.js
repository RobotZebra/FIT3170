import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function Feed(){
    return (<View></View>);
}
function Notifications(){
    return (<View></View>);
}
function Profile(){
    return (<View></View>);
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#91298D',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Body"
        component={Notifications}
        options={{
          tabBarLabel: 'Body',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Health"
        component={Profile}
        options={{
          tabBarLabel: 'Health',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
              name="Settings"
              component={Feed}
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cog" color={color} size={size} />
                ),
              }}
            />
    </Tab.Navigator>
  );
}
export  default MyTabs;
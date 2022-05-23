import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NavigationBar from "../components/NutritionNavigationBar";
import HomeTopBarNavigator from "./HomeTopBarNavigation";
import BodyTopBarNavigator from "./BodyTopBarNavigation";
import HealthTopBarNavigator from "./HealthTopBarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import firebaseApp from '../../src/firebase/config.js';
import {useState, useEffect} from "react";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
const Tab = createBottomTabNavigator();

function Settings() {
  const [shopminders, setShopminders] = useState([]);
  
  useEffect(async () => {
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, "test-collection"));

    const querySnapshot = await getDocs(q);
    const objs = [];
    querySnapshot.forEach((doc) => {
      objs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setShopminders(objs);
    console.log(objs);
  }, [])
  return (<View>
    {
      shopminders.map((obj) => (
        <View key={obj.id}>
          <Text>{obj.name}</Text>
        </View>
      ))
    }
  </View>);
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
        header: ({ route }) => {
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Body"
        component={BodyTopBarNavigator}
        options={{
          tabBarLabel: "Body",
          tabBarIcon: ({ color }) => (
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
          tabBarIcon: ({ color }) => (
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
          tabBarIcon: ({ color }) => (
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
    // <NavigationContainer>
      <MyTabs />
    // </NavigationContainer>
  );
}

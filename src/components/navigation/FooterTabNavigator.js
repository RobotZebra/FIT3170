import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTopBarNavigator from '~/components/HomeTopBarNavigation';
import HospitalTopBarNavigator from '~/components/HospitalTopBarNavigator';
import WikiTopBarNavigator from '~/components/WikiTopBarNavigator';

import { Entypo } from '@expo/vector-icons';

/**
 * 
import firebaseApp from '../../firebase/config';
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
 */

import SettingsStackNavigation from './SettingsStackNavigation';

const Tab = createBottomTabNavigator();

/**
 * 
function Settings() {
  const [shopminders, setShopminders] = useState([]);

  useEffect(async () => {
    const db = getFirestore(firebaseApp);
    const q = query(collection(db, 'test-collection'));

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
  }, []);
  return (
    <View>
      {shopminders.map((obj) => (
        <View key={obj.id}>
          <Text>{obj.name}</Text>
        </View>
      ))}
    </View>
  );
}

 */

function DefaultHeader({ title, style }) {
  return (
    <View style={style}>
      <Text style={footerTabStyles.title}>{title}</Text>
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        activeTintColor: '#91298D',
        tabBarIndicatorStyle: { backgroundColor: '#91298D' },
        tabBarActiveTintColor: '#91298D',
        tabBarHideOnKeyboard: true,
        header: ({ route }) => {
          const title = route.name;

          return (
            <DefaultHeader
              title={title}
              style={{
                fontFamily: 'Roboto_400Regular',
                padding: 20,
                backgroundColor: '#91298D',
                color: 'white',
                height: 100,
              }}
            />
          );
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTopBarNavigator}
        options={{
          fontFamily: 'Roboto_400Regular',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={30} />,
        }}
      />
      <Tab.Screen
        name="Wiki"
        component={WikiTopBarNavigator}
        options={{
          fontFamily: 'Roboto_400Regular',
          tabBarLabel: 'Wiki',
          tabBarIcon: ({ color, size }) => <Entypo name="open-book" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Hospital"
        component={HospitalTopBarNavigator}
        options={{
          fontFamily: 'Roboto_400Regular',
          tabBarLabel: 'Hospital',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/MH-logo-grey.png')}
              style={{
                width: size,
                height: size,
                alignContent: 'center',
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigation}
        options={{
          fontFamily: 'Roboto_400Regular',
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cog" color={color} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}
//export default MyTabs;

export function BottomTabNavigator() {
  return (
    // <NavigationContainer>
    <MyTabs />
    // </NavigationContainer>
  );
}

const footerTabStyles = StyleSheet.create({
  heading: {
    alignItems: 'center',
    flex: 1,
    height: 200,
  },
  title: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontWeight: '500',
    paddingTop: 30,
  },
});

import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { colors } from '~/styles/styles';
import SettingsHomeScreen from '~/screens/SettingsHomeScreen';
import ChangePasswordScreen, { ChangePasswordPageHeader } from '~/screens/ChangePasswordScreen';
import EditProfileScreen, { EditProfilePageHeader } from '~/screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

export default function SettingsStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        header: (props) => <DefaultHeader {...props} />,
      }}>
      <Stack.Screen name="Home" component={SettingsHomeScreen} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          header: (props) => <EditProfilePageHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          header: (props) => <ChangePasswordPageHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export function DefaultHeader() {
  return (
    <View
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: colors.secondary,
      }}>
      <MaterialCommunityIcons name="cog" color={'white'} size={30} style={{ marginRight: 20 }} />
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Settings</Text>
    </View>
  );
}

import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingsHomePage } from "../../pages/SettingsHomePage";
import {
  EditProfilePage,
  EditProfilePageHeader,
} from "../../pages/EditProfilePage";
import { View, Text } from "react-native";
import { colors } from "../../styles/styles";
import {
  ChangePasswordPage,
  ChangePasswordPageHeader,
} from "../../pages/ChangePasswordPage";

const Stack = createNativeStackNavigator();

export default function SettingsStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        header: (props) => <DefaultHeader {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={SettingsHomePage} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfilePage}
        options={{
          header: (props) => <EditProfilePageHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordPage}
        options={{
          header: (props) => <ChangePasswordPageHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export function DefaultHeader(props) {
  return (
    <View
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 50,
        paddingLeft: 20,
        backgroundColor: colors.secondary,
      }}
    >
      <MaterialCommunityIcons
        name="cog"
        color={"white"}
        size={30}
        style={{ marginRight: 20 }}
      />
      <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
        Settings
      </Text>
    </View>
  );
}

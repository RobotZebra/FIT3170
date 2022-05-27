import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../styles/styles';
import { vh } from 'react-native-expo-viewport-units';
import { auth } from '../firebase/config';

export function SettingsHomePage({ navigation }) {
  const settingsHomePageOperations = new SettingsHomePageOperations(auth.currentUser);

  return (
    <View
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 30,
      }}>
      <PurpleBackdrop />
      <Card>
        <UserBanner
          profileImageUrl={auth.currentUser?.photoURL}
          username={settingsHomePageOperations.getUsername()}
        />

        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: 140,
            paddingHorizontal: 20,
            borderBottomColor: 'lightgrey',
            borderBottomWidth: 1,
            marginBottom: 20,
          }}>
          <ChevronButton
            text="Account Settings"
            isDisabled={
              !settingsHomePageOperations.isAccountSettingsAccessable()
            } /*onPress={() => navigation.navigate('AccountSettings')}*/
          />
          <ChevronButton
            text="Edit Profile"
            isDisabled={!settingsHomePageOperations.isEditProfileAccessable()}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <ChevronButton
            text="Change Password"
            isDisabled={!settingsHomePageOperations.isChangePasswordAccessable()}
            onPress={() => navigation.navigate('ChangePassword')}
          />
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            paddingHorizontal: 20,
          }}>
          <PrimaryButton text="Logout" isDisabled={!settingsHomePageOperations.isLogoutActive()} />
          <PrimaryButton
            text="Delete Account"
            isDisabled={!settingsHomePageOperations.isDeleteAccountActive()}
          />
        </View>
      </Card>
    </View>
  );
}

function PurpleBackdrop() {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        width: '100%',
        height: vh(35),
        backgroundColor: colors.secondary,
        paddingTop: 50,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    />
  );
}

function UserBanner({ profileImageUrl, username }) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 80,
        paddingLeft: 30,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
      }}>
      {(profileImageUrl && <Image source={{ uri: profileImageUrl }} />) || (
        <MaterialCommunityIcons name="account" size={30} />
      )}
      <Text style={{ paddingLeft: 20 }}>{username}</Text>
    </View>
  );
}

function Card({ children }) {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        minHeight: '60%',
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 20,
        paddingVertical: 20,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
      {children}
    </View>
  );
}

function ChevronButton({ text, isDisabled, onPress }) {
  return (
    <TouchableOpacity
      {...(isDisabled ? { activeOpacity: '0.5', disabled: true } : {})}
      onPress={() => !isDisabled && onPress && onPress()}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: isDisabled ? 'lightgrey' : 'black' }}>{text}</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={30}
          style={{ color: isDisabled ? 'lightgrey' : 'black' }}
        />
      </View>
    </TouchableOpacity>
  );
}

function PrimaryButton({ text, isDisabled, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity="0.5"
      {...(isDisabled ? { activeOpacity: '0.5', disabled: true } : {})}
      onPress={() => !isDisabled && onPress && onPress()}
      style={{
        width: '60%',
        backgroundColor: isDisabled ? 'lightgrey' : colors.tertiary,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  );
}

class SettingsHomePageOperations {
  constructor(user) {
    this.user = user;
  }

  getUsername() {
    if (this.user === null) return 'Guest User';
    else return this.user.displayName;
  }

  isAccountSettingsAccessable() {
    return this.user === null;
  }

  isEditProfileAccessable() {
    return this.user !== null;
  }

  isChangePasswordAccessable() {
    return this.user !== null;
  }

  isLogoutActive() {
    return this.user !== null;
  }

  isDeleteAccountActive() {
    return this.user !== null;
  }
}

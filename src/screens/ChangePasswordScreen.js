import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { colors } from '~/styles/styles';
import { vh } from 'react-native-expo-viewport-units';
import { updatePassword, EmailAuthProvider } from 'firebase/auth';
import Toast from 'react-native-root-toast';

export function ChangePasswordPageHeader(props) {
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
      <MaterialCommunityIcons
        name="chevron-left"
        color={'white'}
        size={30}
        style={{ marginRight: 20 }}
        onPress={() => props?.navigation?.goBack()}
      />
      <MaterialCommunityIcons
        name="account-key"
        color={'white'}
        size={30}
        style={{ marginRight: 20 }}
      />
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>Change Password</Text>
    </View>
  );
}

export default function ChangePasswordScreen() {
  const changePasswordPageOperations = new ChangePasswordPageOperations();

  const handleOnSubmit = () => {
    (async () => {
      const isSuccessful = await changePasswordPageOperations.updatePassword();
      isSuccessful
        ? (() => {
            Toast.show('Password updated sucessfully.');
            changePasswordPageOperations.resetData();
          })()
        : Toast.show('Password failed to update.');
    })();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <PasswordTextBox
              placeholder={'Enter Old Password'}
              value={changePasswordPageOperations.oldPwdState[0]}
              onChange={(oldPwd) => changePasswordPageOperations.oldPwdState[1](oldPwd)}
            />
            <PasswordTextBox
              placeholder={'Enter New Password'}
              value={changePasswordPageOperations.newPwdState[0]}
              onChange={(newPwd) => changePasswordPageOperations.newPwdState[1](newPwd)}
            />
          </View>
          <PrimaryButton
            text={'Confirm'}
            onPress={() => handleOnSubmit()}
            isDisabled={changePasswordPageOperations.isNewPwdInvalid()}
          />
        </Card>
      </View>
    </TouchableWithoutFeedback>
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

function Card({ children }) {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '90%',
        height: vh(45),
        backgroundColor: 'white',
        borderWidth: 0,
        borderRadius: 20,
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

function PasswordTextBox({ placeholder, value, onChange }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="grey"
      style={{
        width: '84%',
        height: 50,
        backgroundColor: colors.primary,
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 2,
        margin: 5,
      }}
      keyboardType="default"
      secureTextEntry={true}
      textContentType="name"
      value={value}
      onChangeText={(value) => onChange && onChange(value)}
    />
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
      }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>{text}</Text>
    </TouchableOpacity>
  );
}

class ChangePasswordPageOperations {
  constructor(user) {
    this.user = user;

    this.oldPwdState = useState('');
    this.newPwdState = useState('');
  }

  isNewPwdInvalid() {
    return this.newPwdState[0].replace(' ', '').length === 0;
  }

  async resetData() {
    this.oldPwdState[1]('');
    this.newPwdState[1]('');
  }

  async updatePassword() {
    if (!this.user) return false;

    if (this.newPwdState[0].replace(' ', '').length === 0) return false;

    try {
      await this.user.reauthenticateWithCredential(
        EmailAuthProvider.credential(this.user.email, this.oldPwdState[0])
      );
    } catch {
      return false;
    }

    try {
      await updatePassword(this.user, this.newPwdState[0]);
      return true;
    } catch {
      return false;
    }
  }
}

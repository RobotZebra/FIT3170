import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { colors } from "../styling/appTheme";
import { vh } from "react-native-expo-viewport-units";
import { auth, storage, storagePaths } from "../../src/firebase/config";
import {
  updateProfile,
  updateEmail,
  sendEmailVerification,
} from "firebase/auth";
import { ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";

export function EditProfilePageHeader(props) {
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
        name="chevron-left"
        color={"white"}
        size={30}
        style={{ marginRight: 20 }}
        onPress={() => props?.navigation?.goBack()}
      />
      <MaterialCommunityIcons
        name="account"
        color={"white"}
        size={30}
        style={{ marginRight: 20 }}
      />
      <Text style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
        {auth.currentUser?.displayName ?? "User"}
      </Text>
    </View>
  );
}

export function EditProfilePage({ navigation }) {
  const editProfilePageOperations = new EditProfilePageOperations(
    auth.currentUser,
    getProfileImageRef
  );

  const handleOnSubmit = () => {
    (async () => {
      const results = await Promise.all([
        editProfilePageOperations.updateProfileImageUrl(),
        editProfilePageOperations.updateDisplayName(),
        editProfilePageOperations.updateEmail(),
      ]);

      const isAllGood = results.reduce(
        (output, current) => output && current,
        true
      );
      isAllGood
        ? Toast.show("Profile updated sucessfully.")
        : Toast.show("Profile updated failed.");
    })();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          paddingTop: 30,
        }}
      >
        <PurpleBackdrop />
        <Card>
          <EditProfilePhotoSection
            uri={editProfilePageOperations.profileImageUriState[0]}
            onPress={async () => {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
              });

              if (!result.cancelled)
                editProfilePageOperations.profileImageUriState[1](result.uri);
            }}
          />
          <View
            style={{ display: "flex", alignItems: "center", width: "100%" }}
          >
            <TextBox
              placeholder="First Name"
              value={editProfilePageOperations.firstNameState[0]}
              onChange={(fName) =>
                editProfilePageOperations.firstNameState[1](fName)
              }
            />
            <TextBox
              placeholder="Last Name"
              value={editProfilePageOperations.lastNameState[0]}
              onChange={(lName) =>
                editProfilePageOperations.lastNameState[1](lName)
              }
            />
            <TextBox
              placeholder="Email"
              value={editProfilePageOperations.emailState[0]}
              onChange={(email) =>
                editProfilePageOperations.emailState[1](email)
              }
            />
          </View>
          <PrimaryButton
            text={"Confirm"}
            isDisabled={false}
            onPress={() => handleOnSubmit()}
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
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        width: "100%",
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "90%",
        minHeight: vh(65),
        backgroundColor: "white",
        borderWidth: 0,
        borderRadius: 20,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}
    >
      {children}
    </View>
  );
}

function EditProfilePhotoSection({ uri, onPress }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {uri ? (
        <Image source={{ uri }} style={{ width: 50, height: 50 }} />
      ) : (
        <MaterialCommunityIcons
          name="account"
          color={"black"}
          size={50}
          style={{ marginRight: 20 }}
        />
      )}
      <TouchableOpacity
        activeOpacity="0.5"
        style={{
          backgroundColor: colors.tertiary,
          paddingTop: 10,
          paddingRight: 20,
          paddingBottom: 10,
          paddingLeft: 20,
          borderRadius: 10,
          marginLeft: 20,
        }}
        onPress={() => onPress && onPress()}
      >
        <Text style={{ color: "white" }}>Edit Profile Photo</Text>
      </TouchableOpacity>
    </View>
  );
}

function TextBox({ placeholder, value, onChange }) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="grey"
      style={{
        width: "84%",
        height: 50,
        backgroundColor: colors.primary,
        padding: 10,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 2,
        margin: 5,
      }}
      keyboardType="default"
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
      {...(isDisabled ? { activeOpacity: "0.5", disabled: true } : {})}
      onPress={() => !isDisabled && onPress && onPress()}
      style={{
        width: "60%",
        backgroundColor: isDisabled ? "lightgrey" : colors.tertiary,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
}

const getProfileImageRef = () => {
  return ref(storage, storagePaths.profileImages + uuid.v4());
};

class EditProfilePageOperations {
  constructor(user, getProfileImageRef) {
    this.user = user;

    this.getProfileImageRef = getProfileImageRef;

    this.setInitialData();

    this.profileImageUriState = useState(this.initialProfileImageUri);
    this.firstNameState = useState(this.initialFName);
    this.lastNameState = useState(this.initialLName);
    this.emailState = useState(this.initialEmail);
  }

  setInitialData() {
    this.initialProfileImageUri = this.user?.photoURL;
    [this.initialFName, this.initialLName] = this.user?.displayName?.split(
      " ",
      1
    ) ?? ["", ""];
    this.initialEmail = this.user?.email ?? "";
  }

  async updateProfileImageUrl() {
    if (this.initialProfileImageUri === this.profileImageUriState[0])
      return true;

    const response = await fetch(this.profileImageUriState[0]);
    const blobImage = await response.blob();
    try {
      const result = await uploadBytes(this.getProfileImageRef(), blobImage);
      await updateProfile(this.user, { photoURL: result.ref.toString() });
      return true;
    } catch {
      return false;
    }
  }

  async updateDisplayName() {
    if (
      this.initialLName === this.firstNameState[0] &&
      this.initialFName === this.lastNameState[0]
    )
      return true;

    try {
      await updateProfile(this.user, {
        displayName: `${this.firstNameState[0]} ${this.lastNameState[0]}`,
      });
      return true;
    } catch {
      return false;
    }
  }

  async updateEmail() {
    if (this.initialEmail === this.emailState[0]) return true;

    try {
      await updateEmail(this.user, this.emailState[0]);
      await sendEmailVerification(this.user);
      return true;
    } catch {
      return false;
    }
  }
}

import React from "react";
import { DropDown } from "../components/DropDown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView, Animated, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function PlaceholderInformation() {
  return (
    <Animated.View>
      <Text>Put some information here!</Text>
    </Animated.View>
  );
}

export default function BabyPage() {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <DropDown
        header={"Growth"}
        subHeader={"What are the stages of my baby's development?"}
        information={<PlaceholderInformation />}
        icon={
          <MaterialCommunityIcons
            name="human-male-height"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        header={"Movements"}
        subHeader={"What should I feel as my baby moves about?     "}
        information={<PlaceholderInformation />}
        icon={
          <FontAwesome5
            name="shoe-prints"
            size={24}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        header={"Infancy"}
        subHeader={"How can I help my newborn baby thrive?           "}
        information={<PlaceholderInformation />}
        icon={
          <FontAwesome5
            name="baby"
            size={30}
            color="white"
            style={{ margin: 10 }}
          />
        }
      />
    </View>
  );
}

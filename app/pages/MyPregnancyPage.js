import React from "react";
import { Text, View } from "react-native";
import { DropDown } from "../components/DropDown";

export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
      <DropDown
        header={"Growth"}
        subHeader={"What are the stages of my baby's development?"}
        information={<Text>Some info</Text>}
      />
    </View>
  );
}

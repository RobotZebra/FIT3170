import React from "react";
import { ScrollView, Text, View } from "react-native";
import { DropDown, DropDownView } from "../components/DropDown";
import { AntDesign } from "@expo/vector-icons";
import BabyPage from "./BabyPage";

export function MyPregnancyPage() {
  // just throwing the baby page in here to test, feel free to remove it
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
    </View>
  );
}

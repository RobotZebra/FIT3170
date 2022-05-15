import React from "react";
import { Text, View } from "react-native";
import BabySize from "./components/BabySize.js";

export function MyPregnancyPage() {
  BabySize();
  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
    </View>



  );
}
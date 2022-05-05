import React from "react";
import { Text, View } from "react-native";
import { StageCarousel } from "../components/my-pregnancy/StageCarousel";

export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style>My pregnancy tab</Text>
      <StageCarousel />
    </View>
  );
}
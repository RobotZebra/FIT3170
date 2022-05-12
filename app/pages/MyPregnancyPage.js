import React from "react";
import { Text, View } from "react-native";
import { StageCarousel } from "../components/my-pregnancy/StageCarousel";

export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
      <View style={{ height: 355 }}>
        <StageCarousel />
      </View>
    </View>
  );
}
import React from "react";
import { Text, View } from "react-native";
import SwiperComponent from "../components/my-pregnancy/StagesCarousel"

export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
      <SwiperComponent/>
    </View>
  );
}
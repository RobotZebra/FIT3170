import React from "react";
import { Text, View } from "react-native";
import { StageCarousel } from "../components/my-pregnancy/StageCarousel";
import { VisualisationOfBaby } from "../components/VisualisationOfBaby";
import { BabySize } from "../components/BabySize";
import { RecommendedAppointment } from "../components/RecommendedAppointment";

export function MyPregnancyPage() {
  const babyViewText = BabySize();
  return <>
    <View>
      {babyViewText}
    </View>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>

      <View style={{ height: 400 }}>
        <VisualisationOfBaby />
      </View>

      <View style={{ height: 355 }}>
        <StageCarousel />
      </View>

      <View style={{ height: 200 }}>
        <RecommendedAppointment />
      </View>
    </View>
  </>
}
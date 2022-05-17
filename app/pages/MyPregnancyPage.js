import React from "react";
import { Text, View } from "react-native";
import {RecommendedAppointment} from "../components/RecommendedAppointment";
import { VisualisationOfBaby } from "../components/VisualisationOfBaby";

export function MyPregnancyPage() {
  return <>
        <View style={{ height: 400 }}>
            <VisualisationOfBaby />
        </View>
    </>;
}
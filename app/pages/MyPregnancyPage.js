import React from "react";
import { Text, View } from "react-native";
import {BabySize} from "../components/BabySize";
import {StyleSheet} from 'react-native';

export function MyPregnancyPage() {
  const babyViewText = BabySize();
  return <>
    <View>
        {babyViewText}
    </View>

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
    </View>





  </>;
}
import React from "react";
import { Text, View } from "react-native";
import { PurpleButton } from '../components/CustomButtons';


export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
        <PurpleButton title="Proteins" width={365} height={65} onPress={() => console.log('Proteins')}/>
        <PurpleButton title="Grains" width={365} height={65} onPress={() => console.log('Proteins')}/>
    </View>
  );
}
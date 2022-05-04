import React from "react";
import { Text, View } from "react-native";
import {PurpleButton, PurpleFormSubmissionButton} from "../components/Buttons";


export function MyPregnancyPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My pregnancy tab</Text>
        <PurpleFormSubmissionButton
            width={343}
            height={51}
            title={"Submit"}
            onPress={() => console.log("form submit")}
        />
        <PurpleButton
            width={321}
            height={51}
            title={"press me"}
            onPress={() => console.log("press me")}
        />
    </View>
  );
}
import React from "react";
import { Text, View } from "react-native";
import {RecommendedAppointment} from "../components/RecommendedAppointment";

export function MyPregnancyPage() {
    return <>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>My pregnancy tab</Text>
        </View>

        <View style={{ height: 200 }}>
            <RecommendedAppointment />
        </View>


    </>;
}
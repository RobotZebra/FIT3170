import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView, ScrollView} from "react-native";

export function RecommendedAppointment() {
    // Hard-coded for now
    const appointmentType = "General Ultrasound";
    const hospital = "Clayton Hospital";
    const waitTime = "1 hour";
    const buttonTitle = "Book Now";
    const description = "An ultrasound scan is a medical test that uses high-frequency sound waves to capture live images from the inside of your body. It’s also known as sonography.\n\nThe technology is similar to that used by sonar and radar, which help the military detect planes and ships. An ultrasound allows your doctor to see problems with organs, vessels, and tissues without needing to make an incision.";
    return (
        <View style={styles.container}>
            <View style={styles.appointmentContainer}>
                <View style={styles.information}>
                    <Text style={styles.title1}>{appointmentType}</Text>
                    <Text style={styles.title2}>{hospital}</Text>
                    <Text style={styles.title2}>{waitTime}</Text>
                </View>
                <Pressable style={styles.contactButton} onPress={() => {
                    // Open phone with phone number filled
                }}>
                    <Text style={styles.title2}>{buttonTitle}</Text>
                </Pressable>
            </View>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.descriptionContainer}>
                    <Text>{description}</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    appointmentContainer: {
        flex: 0.6,
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#91298D"
    },
    information: {
        flex: 0.8,
        justifyContent: "center",
        backgroundColor: "#91298D"
    },
    contactButton: {
        flex: 0.2,
        justifyContent: "center",
        backgroundColor: "#91298D"
    },
    descriptionContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: "#FED4E8"
    },
    title1: {
        backgroundColor: "#91298D",
        color: "white",
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    },
    title2: {
        marginTop: 5,
        backgroundColor: "#91298D",
        color: "white",
        textAlign: "left",
        fontSize: 15,
    }
});
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";


export function VisualisationOfBaby() {
    // Hard-coded for now
    const visualisationHeading = "Your baby is the size of";
    const description = "A lime";
    return (
        <View style={styles.container}>
            <View style={styles.visualisationContainer}>
                <View style={styles.information}>
                    <Text style={styles.title1}>{visualisationHeading}</Text>
                </View>
            </View>
            <Image
                style={styles.logo}
                source={require('../../../assets/lime.jpg')}
            />
            <View style={styles.visualisationContainer}>
                <View style={styles.information}>
                    <Text style={styles.title2}>{description}</Text>
                </View>
            </View>
        </View>

            

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    visualisationContainer: {
        flex: 0.6,
        padding: 15,
        flexDirection: "row",
        justifyContent: "center",
    },
    information: {
        flex: 0.8,
        justifyContent: "center",
    },
    descriptionContainer: {
        flex: 1,
        padding: 15,
    },
    title1: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    title2: {
        color: "black",
        textAlign: "center",
        fontSize: 20,
    },
      logo: {
        width: 200,
        height: 200,
        borderRadius: 1000,
        alignSelf: 'center',
      }
});

export default VisualisationOfBaby;
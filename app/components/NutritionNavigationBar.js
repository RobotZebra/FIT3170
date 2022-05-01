import React from "react";
import { View, StyleSheet, Text } from "react-native";

function NavigationBar(props) {
  return (
    <View style={styles.buttonSection}>
      <View style={styles.buttonClicked}>
        <Text style={styles.buttonTextClicked}>Nutrition</Text>
      </View>
      <View style={styles.buttonUnclicked}>
        <Text style={styles.buttonTextUnclicked}>Complications</Text>
      </View>
      <View style={styles.buttonUnclicked}>
        <Text style={styles.buttonTextUnclicked}>Tests</Text>
      </View>
    </View>
  );
}

export default NavigationBar;

const styles = StyleSheet.create({
  buttonSection: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  buttonClicked: {
    backgroundColor: "#91298D",
    width: "30%",
    height: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonUnclicked: {
    backgroundColor: "white",
    borderColor: "#91298D",
    borderWidth: 1,
    width: "30%",
    height: "50%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonTextClicked: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },

  buttonTextUnclicked: {
    color: "#91298D",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
});

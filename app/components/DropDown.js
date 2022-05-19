import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function DropDown(props) {
  const { header, subHeader, information } = props;
  const [isDroppedDown, setDroppedDown] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <View
        style={styles.container}
        onPress={() => console.log("pressed drop down")}
      >
        <AntDesign
          name="picture"
          size={24}
          color="white"
          style={{ margin: 5 }}
        />
        <View style={{ flexDirection: "column", margin: 15 }}>
          <Text style={styles.headerText}>{header}</Text>
          <Text style={styles.subHeaderText}>{subHeader}</Text>
        </View>
        <Pressable
          onPress={() => setDroppedDown(!isDroppedDown)}
          style={{
            margin: 5,
          }}
        >
          <Ionicons name="chevron-forward" size={24} color="white" />
        </Pressable>
      </View>
      {isDroppedDown ? information : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 71,
    backgroundColor: "#91298D",
    borderColor: "#000000",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: { color: "white" },
  subHeaderText: { color: "white" },
});

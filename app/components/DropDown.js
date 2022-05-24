import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function DropDownView(props) {
  const { children } = props;
  return <ScrollView>{children}</ScrollView>;
}

export function DropDown(props) {
  const { title, subtitle, information, icon } = props;
  const [isDroppedDown, setDroppedDown] = useState(false);

  return (
    <View style={{ width: "100%" }}>
      <View
        style={styles.container}
        onPress={() => console.log("pressed drop down")}
      >
        {icon}
        <View style={{ flexDirection: "column", margin: 15, flex: 1 }}>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={styles.subHeaderText}>{subHeader}</Text>
        </View>
        <Pressable
          onPress={() => setDroppedDown(!isDroppedDown)}
          style={{
            margin: -5,
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={24}
            color="white"
            margin={-10}
          />
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
  headerText: { color: "white", fontWeight: "bold", fontSize: 20 },
  subHeaderText: { color: "white", fontWeight: "normal" },
});

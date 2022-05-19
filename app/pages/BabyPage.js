import { ScrollView, View, Text } from "react-native";
import { DropDown } from "../components/DropDown";
import { AntDesign } from "@expo/vector-icons";

export default function BabyPage() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          // just some empty space for the scroll view here
          height: 40,
        }}
      ></View>
      <DropDown
        header={"Growth"}
        subHeader={"What are the stages of my baby's development?"}
        information={<Text>put information component here!!!</Text>}
        icon={
          // change the icons here
          <AntDesign
            name="picture"
            size={24}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        header={"Topic Title"}
        subHeader={"topic subtitle"}
        information={<Text>place holder!!!</Text>}
        icon={
          <AntDesign
            name="picture"
            size={24}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
    </ScrollView>
  );
}

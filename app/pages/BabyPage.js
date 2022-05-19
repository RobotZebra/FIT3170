import { ScrollView, Text } from "react-native";
import { DropDown } from "../components/DropDown";
import { AntDesign } from "@expo/vector-icons";

export default function BabyPage() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <DropDown
        header={"Growth"}
        subHeader={"What are the stages of my baby's development?"}
        information={<Text>Some info</Text>}
        icon={
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
        information={<Text>Some info</Text>}
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

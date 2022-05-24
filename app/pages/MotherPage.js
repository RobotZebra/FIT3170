import { Text, View } from "react-native";
import { DropDown } from "../components/DropDown";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MotherPage() {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <DropDown
        //symptoms
        header={"Signs and Symptoms"}
        subHeader={"What will I experience during pregnancy?"}
        information={<Text>Some info</Text>}
        icon={
          <MaterialCommunityIcons
            name="heart"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        //nutrition
        header={"Nutrition"}
        subHeader={"What should and shouldn't I eat during pregnancy?"}
        information={<Text>Some info</Text>}
        icon={
          <MaterialCommunityIcons
            name="food-fork-drink"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        //mood
        header={"Mood"}
        // maybe it should be behavioural instead of psychological?
        subHeader={"What psychological changes might I expererience?"}
        information={<Text>Some info</Text>}
        icon={
          <FontAwesome5
            name="brain"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
    </View>
  );
}

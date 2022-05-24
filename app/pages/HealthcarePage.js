import { ScrollView, View, Text } from "react-native";
import { DropDown } from "../components/DropDown";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function BabyPage() {
  return (
    <ScrollView style={{ width: "100%" }}>
      <View
        style={{
          // just some empty space for the scroll view here
          height: 0,
        }}
      ></View>
      <DropDown
        title={"Tests and Investigations"}
        subtitle={"What will my doctor test me for during pregnancy?"}
        information={<Text>put information component here!!!</Text>}
        icon={
          // change the icons here
          <MaterialCommunityIcons
            name="flask-outline"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        title={"Support"}
        subtitle={"What other help can Monash Health provide me?"}
        information={<Text>place holder!!!</Text>}
        icon={
          <MaterialCommunityIcons
            name="hand"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        title={"Labour"}
        subtitle={"What are my options for giving birth?"}
        information={<Text>place holder!!!</Text>}
        icon={
          <MaterialCommunityIcons
            name="human-pregnant"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
    </ScrollView>
  );
}

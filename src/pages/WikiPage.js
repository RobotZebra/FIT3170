import { ScrollView, Animated, View, Text } from "react-native";
import { DropDown } from "../components/DropDown";

function PlaceholderInformation() {
  return (
    <Animated.View>
      <Text>Put some information here!</Text>
    </Animated.View>
  );
}

export default function WikiPage(props) {
  const { dropDownList } = props;

  return (
    <ScrollView style={{ width: "100%" }}>
      {dropDownList.map((dropDown) => {<DropDown props={...dropDown}/>})}
    </ScrollView>
  );
}

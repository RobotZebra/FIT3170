import { ScrollView, Animated, View, Text } from "react-native";
import { DropDown } from "../components/DropDown";
import { AntDesign } from "@expo/vector-icons";

/**
 * 
      <DropDown
        header={"Growth"}
        subHeader={"What are the stages of my baby's development?"}
        information={<PlaceholderInformation />}
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
 */

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

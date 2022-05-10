import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


function ContactCard({props}) {
    var title = props.title
    var subtitle = props.subtitle
   
  return (
    <View style={styles.contactCardLight}>
      <Text style={styles.contactCardTextHeader}>{title}</Text>
      <View style={[{
            flexDirection: "row"
        }]}>
        <View paddingRight={60}>
            <Text style={styles.contactCardText}>{subtitle}</Text>
         </View>
        <View paddingLeft={30}>
            <MaterialCommunityIcons name="phone-outline" color="white" size={30}/>
        </View>
        <View paddingLeft={30}>
            <MaterialCommunityIcons name="email-outline" color="white" size={30} padding={40}/>
        </View>
        <View paddingLeft={30}>
            <MaterialCommunityIcons name="heart-outline" color="white" size={30} padding={40}/>
        </View>
        
      </View>
    </View>
  );
}

export default ContactCard;

const styles = StyleSheet.create({
    contactCardLight: {
      width: 380,
      height: 125,
      backgroundColor: "#91298D",
      flexDirection: "column",
      justifyContent: "space-around",
      paddingLeft: 20,
      alignItems: "flex-start",
      borderRadius: 25
    },

    contactCardTextHeader: {
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold"
      },
  
    contactCardText: {
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
    },
  });
  
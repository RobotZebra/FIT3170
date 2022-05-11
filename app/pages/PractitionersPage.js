import React from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import ContactCard from "../components/ContactCard";

export function PractitionersPage() {
  let maternityContactCardProps={
    title: "Maternity Team",
    subtitle: "Clayton",
    favourite: false
  };

  let obstetricianContactCardProps={
    title: "Obstetricians",
    subtitle: "Clayton",
    favourite: false
  };
  const MATERNITY_KEY_CONTACTS = "Maternity Services Key Contacts"
  const SPECIALIST_OBSTETRICIAN_CONTACTS = "Specialist Obstetrician Contacts"
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>
        {MATERNITY_KEY_CONTACTS}
      </Text>
      <View style={{ paddingTop: 20, alignItems: "center"}}>
        <ContactCard props={maternityContactCardProps}>
        </ContactCard>
      </View>
      <Text>
      {"\n"}
      {"\n"}
      </Text>
      <Text style={styles.heading1}>
        {SPECIALIST_OBSTETRICIAN_CONTACTS}
      </Text>
      <View style={{ paddingTop: 20, alignItems: "center"}}>
        <ContactCard props={obstetricianContactCardProps}>
        </ContactCard>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  heading1: {
    color: "#91298D",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    padding: 15
  },
});

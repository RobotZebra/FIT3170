import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ContactCard({ props }) {
  var title = props.title;
  var subtitle = props.subtitle;

  return (
    <View style={styles.contactCardLight}>
      <Text style={styles.contactCardTextHeader}>{title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View paddingRight={40}>
          <Text style={styles.contactCardText}>{subtitle}</Text>
        </View>
        <View paddingLeft={35}>
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialCommunityIcons name="phone" color="white" size={40} />
          </TouchableOpacity>
        </View>
        <View paddingLeft={35}>
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialCommunityIcons name="email" color="white" size={40} />
          </TouchableOpacity>
        </View>
        <View paddingLeft={35}>
          <TouchableOpacity activeOpacity={0.5}>
            <MaterialCommunityIcons name="heart" color="white" size={40} />
          </TouchableOpacity>
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
    backgroundColor: '#91298D',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 20,
    alignItems: 'flex-start',
    borderRadius: 25,
  },

  contactCardTextHeader: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  contactCardText: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
});

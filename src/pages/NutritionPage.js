import React from 'react';
import { Text, View } from 'react-native';
import { DropDown } from '../components/DropDown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export function NutritionPage() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <DropDown
        header={'Growth'}
        subHeader={"What are the stages of my baby's development?"}
        information={<Text>Some info</Text>}
        icon={
          <MaterialCommunityIcons
            name="human-male-height"
            size={30}
            color="white"
            style={{ margin: 5 }}
          />
        }
      />
      <DropDown
        header={'Movements'}
        subHeader={'What should I feel as my baby moves about?     '}
        information={<Text>Some info</Text>}
        icon={<FontAwesome5 name="shoe-prints" size={24} color="white" style={{ margin: 5 }} />}
      />
      <DropDown
        header={'Infancy'}
        subHeader={'How can I help my newborn baby thrive?           '}
        information={<Text>Some info</Text>}
        icon={<FontAwesome5 name="baby" size={30} color="white" style={{ margin: 10 }} />}
      />
    </View>
  );
}

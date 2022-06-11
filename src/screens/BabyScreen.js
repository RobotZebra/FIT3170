import React from 'react';
/**
 * 
import { DropDown } from '~/components/DropDown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
 */
// import { Animated, View, Text } from 'react-native';
import { View, Text } from 'react-native';
import { useGetPractitionersQuery } from '~/api/firestoreApi';

export default function BabyScreen() {
  /**
   * 
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <DropDown
        title={'Growth'}
        subtitle={"What are the stages of my baby's development?"}
        information={<PlaceholderInformation />}
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
        title={'Movements'}
        subtitle={'What should I feel as my baby moves about?     '}
        information={<PlaceholderInformation />}
        icon={<FontAwesome5 name="shoe-prints" size={24} color="white" style={{ margin: 5 }} />}
      />
      <DropDown
        title={'Infancy'}
        subtitle={'How can I help my newborn baby thrive?           '}
        information={<PlaceholderInformation />}
        icon={<FontAwesome5 name="baby" size={30} color="white" style={{ margin: 10 }} />}
      />
    </View>
  );
   */

  const { data, error, isLoading } = useGetPractitionersQuery();

  if (isLoading) {
    return (
      <View>
        <Text>splash screen...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>error</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
}

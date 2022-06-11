import React from 'react';
import { ScrollView } from 'react-native';
import { DropDown } from '~/components/DropDown';

export default function WikiScreen(props) {
  const { dropDownList } = props;

  return (
    <ScrollView style={{ width: '100%' }}>
      {dropDownList.map((dropDown) => {
        <DropDown {...dropDown} />;
      })}
    </ScrollView>
  );
}

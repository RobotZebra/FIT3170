import { View, StyleSheet } from 'react-native';

export function PurpleContainer(props) {
  return (
    <View
      style={[
        {
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          margin: props.margin,
        },
        styles.container,
      ]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // TODO: tweak and move to GlobalStyles
    width: 365,
    height: 65,
    margin: 10,
    // not sure what border radius is meant to be by default
    borderRadius: 25,
    backgroundColor: '#91298D',
    alignItems: 'center',
    justifyContent: 'center',
    // TODO: need drop shadow effect
  },
});

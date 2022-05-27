import { View, Pressable, StyleSheet, Text } from 'react-native';
import { PurpleContainer } from './Containers';
import GlobalStyles from '../styles/GlobalStyles';

export function PurpleButton(props) {
  const { onPress, title, width, height } = props;
  return (
    <Pressable onPress={onPress}>
      <PurpleContainer width={width} height={height}>
        <Text style={styles.text}>{title}</Text>
      </PurpleContainer>
    </Pressable>
  );
}

export function PurpleFormSubmissionButton(props) {
  const { title, onPress, width, height } = props;
  return (
    <Pressable onPress={onPress}>
      <View style={GlobalStyles.purpleFormSubmissionButtonContainer} width={width} height={height}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    // TODO: tweak this and then move to GlobalStyles
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
});

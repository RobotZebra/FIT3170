import {Pressable, StyleSheet, Text} from 'react-native';
import {PurpleContainer} from "./containers";


export function PurpleButton(props) {
    const { onPress, title, width, height } = props;
    return (
        <PurpleContainer width={width} height={height}>
            <Pressable onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </PurpleContainer>
    );
}

const styles = StyleSheet.create({
    text: {
        // TODO: tweak this and then move to GlobalStyles
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "700",
    }
})
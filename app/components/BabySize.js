import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function BabySize() {
       const [value, setValue] = useState(0);
        // Not sure how we are handling this yet:
        const pregnancyDayValue = 60;
        const averagePregnancyDuration = 280;
        const pregnancyProportion = (pregnancyDayValue / averagePregnancyDuration) * 100;
    return (
        <View style = {styles.container}>
            <CircularProgress
                radius = {90}
                value = {pregnancyProportion}                    // the value we need
                textColor = '#222'
                fontsize = {20}
                valueSuffix = {'%'}
                inActiveStrokeColor = {'#2ecc71'}
                inActiveStrokeOpacity = {0.2}
                inActiveStrokeWidth = {6}
                duration = {3000}
                onAnimationComplete = {() => setValue(50)}
            />
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
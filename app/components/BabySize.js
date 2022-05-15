import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

export function BabySize() {
       const [value, setValue] = useState(0);
        // Not sure how we are handling this yet:
        const pregnancyDayValue = 60;
        const monthValue = Math.ceil(pregnancyDayValue / 30)
        const averagePregnancyDuration = 280;
        const pregnancyRemainingTime = averagePregnancyDuration - pregnancyDayValue;
        const pregnancyProportion = (pregnancyDayValue / averagePregnancyDuration) * 100;
    return (
        <View style = {styles.container}>
            <CircularProgress
                radius = {120}
                value = {pregnancyProportion}                    // the value we need
                textColor = '#222'
                subtitle = {pregnancyRemainingTime + ' days left'}
                title = {"Month " + monthValue}
                titleStyle = {{fontWeight: 'bold', fontSize: '100'}}
                showProgressValue = {false}
                activeStrokeColor = {'purple'}
                inActiveStrokeColor = {'lightgray'}
                inActiveStrokeOpacity = {1}
                inActiveStrokeWidth = {6}
                duration = {0}
                onAnimationComplete={() => setValue(50)}
            />


            <StatusBar style="auto"/>
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
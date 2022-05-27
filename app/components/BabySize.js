import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
// import CircularProgress from 'react-native-circular-progress-indicator';
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export function BabySize() {
  const [value, setValue] = useState(0);
  // Not sure how we are handling this yet:
  const pregnancyDayValue = 60;
  const monthValue = Math.ceil(pregnancyDayValue / 30)
  const averagePregnancyDuration = 280;
  const pregnancyRemainingTime = averagePregnancyDuration - pregnancyDayValue;
  const pregnancyProportion = (pregnancyDayValue / averagePregnancyDuration) * 100;
  return <>
    <View style={styles.container}>
      {/* <CircularProgress
        radius={120}
        value={pregnancyProportion}                    // the value we need
        textColor='#222'
        subtitle={pregnancyRemainingTime + ' days left'}
        title={"Month " + monthValue}
        titleStyle={{ fontWeight: 'bold', fontSize: '100' }}
        showProgressValue={false}
        activeStrokeColor={'purple'}
        inActiveStrokeColor={'lightgray'}
        inActiveStrokeOpacity={1}
        inActiveStrokeWidth={6}
        duration={0}
        onAnimationComplete={() => setValue(50)}
      /> */}

      <AnimatedCircularProgress
        size={360}
        width={15}
        backgroundWidth={5}
        fill={pregnancyProportion}
        tintColor="#91298D"
        lineCap="round"
        // tintTransparency={false}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#563c5c"
        // style={{ borderColor: '#91298D', borderRadius: 500, backgroundColor: '#91298D' }}
        rotation={0}
      >
        {(fill) => (
          <View style={styles.innerCircle}>
            <Text style={{ color: "#91298D", fontSize: 16 }}>
              Month {monthValue}
            </Text>

            <Text style={{ color: "#91298D", fontSize: 48, fontWeight: "bold"}}>
              {Math.round(fill / pregnancyProportion * pregnancyRemainingTime)} Days Left
            </Text>
          </View>
        )}

      </AnimatedCircularProgress>
    </View>
    <Image
        style={styles.logo}
        source={require('../../assets/purple-ruler.png')}
    />
    <Image
         style={styles.logo}
         source={require('../../assets/purple-scales.png')}
    />
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  innerCircle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
          width: 50,
          height: 50,
          borderRadius: 1000,
          alignSelf: 'center',
        }
});
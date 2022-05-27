import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { StageCarousel } from '../components/my-pregnancy/StageCarousel';
import { VisualisationOfBaby } from '../components/my-pregnancy/VisualisationOfBaby';
import { RecommendedAppointment } from '../components/my-pregnancy/RecommendedAppointment';
import { BabySize } from '../components/BabySize';

export function MyPregnancyPage() {
  // just throwing the baby page in here to test, feel free to remove it
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <BabySize />
        </View>

        <View style={{ height: 400 }}>
          <VisualisationOfBaby />
        </View>

        <View style={{ height: 355 }}>
          <StageCarousel />
        </View>

        <View style={{ height: 400 }}>
          <RecommendedAppointment />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {},
});

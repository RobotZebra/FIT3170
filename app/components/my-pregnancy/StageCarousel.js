// Reference: https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md
import React, { useState } from "react";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Text, View, Button, StyleSheet } from "react-native";

export function StageCarousel() {
  const [stages, setStages] = useState([
    { month: 1, description: "You're in your first month of pregnancy!" },
    { month: 3, description: "You’re now in month 3 of your pregnancy, and your baby has officially graduated from an embryo to a fetus. You may just be starting to show at 10 weeks pregnant (though if there are no signs of a bump yet, that’s normal too), and you might also notice visible veins and vaginal discharge" },
    { month: 5, description: "Month 5!!" },
  ])
  const startingIndex = 0
  const [index, setIndex] = useState(startingIndex)

  return <>
    <Carousel
      data={stages}
      renderItem={RenderItem}
      itemWidth={250}
      itemHeight={355}
      sliderWidth={400}
      firstItem={startingIndex}
      onSnapToItem={(slideIndex) => setIndex(slideIndex)}
    />
    <Pagination
      activeDotIndex={index}
      dotsLength={stages.length}
    />
  </>
}

function RenderItem({ item }) {
  return (
    <View style={itemStyle.container}>
      <Text style={itemStyle.title}>
        Month {item.month}
      </Text>

      <View style={{ flex: 1, justifyContent: 'center', }} >
        <Text style={{ textAlign: 'center', padding: 10, }}>
          {item.description}
        </Text>
      </View>
      <Button
        title="Learn More"
        color="#91298D"
        accessibilityLabel={`Learn more about the pregnancy stage at ${item.month}`}
      />
      {/* TODO: Button Learn More */}
    </View>
  )
}

const itemStyle = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    height: '100%',
    backgroundColor: 'white',
    borderColor: '#91298D',
    overflow: 'hidden',
  },
  title: {
    backgroundColor: '#91298D',
    borderRadius: 5,
    fontSize: 24,
    paddingVertical: 10,
    textAlign: 'center',
    color: 'white',
  }
})

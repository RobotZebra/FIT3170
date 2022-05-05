import React, { useState } from "react";
import Carousel from 'react-native-snap-carousel';
import { Text, View } from "react-native";

// Reference: https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md

export function StageCarousel() {
  const [stages, setStages] = useState([
    { month: 1, description: "You're in your first month of pregnancy!" },
    { month: 3, description: "You’re now in month 3 of your pregnancy, and your baby has officially graduated from an embryo to a fetus. You may just be starting to show at 10 weeks pregnant (though if there are no signs of a bump yet, that’s normal too), and you might also notice visible veins and vaginal discharge" },
    { month: 5, description: "Month 5!!" },
  ])

  return (
    <Carousel
      data={stages}
      renderItem={RenderItem}
      itemWidth={300}
      sliderWidth={500}
    />
  )
}

function RenderItem({ item }) {
  return (
    <View style={{
      borderRadius: 10,
      borderWidth: 2,
    }}>
      <Text style={{
        backgroundColor: '#91298D',
        fontSize: 24,
        borderRadius: 10,
      }}>Month {item.month}</Text>
      <Text>{item.description}</Text>
      {/* TODO: Button Learn More */}
    </View>
  )
}
import React, { useState } from "react";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Text, View, Button } from "react-native";

// Reference: https://github.com/meliorence/react-native-snap-carousel/blob/master/doc/PROPS_METHODS_AND_GETTERS.md

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
    <View style={{
      borderRadius: 10,
      borderWidth: 2,
      height: '100%',
      borderColor: '#91298D',
      overflow: 'hidden',
    }}>
      <Text style={{
        backgroundColor: '#91298D',
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        borderRadius: 5,
        fontSize: 24,
        paddingVertical: 10,
        textAlign: 'center',
        color: 'white',
      }}>
        Month {item.month}
      </Text>

      <Text style={{
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        textAlign: 'center',
      }}>
        {item.description}
      </Text>
      <Button
        title="Learn More"
        color="#91298D"
        accessibilityLabel={`Learn more about the pregnancy stage at ${item.month}`}
      />
      {/* TODO: Button Learn More */}
    </View>
  )
}
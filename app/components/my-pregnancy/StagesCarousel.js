import { StyleSheet, Text, View, Button } from 'react-native'
import Swiper from 'react-native-swiper'

const stages = [
  { month: 1, description: "You're in your first month of pregnancy!" },
  { month: 3, description: "You’re now in month 3 of your pregnancy, and your baby has officially graduated from an embryo to a fetus. You may just be starting to show at 10 weeks pregnant (though if there are no signs of a bump yet, that’s normal too), and you might also notice visible veins and vaginal discharge" },
  { month: 5, description: "Month 5!!" },
]

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    borderRadius: 10,
    borderWidth: 2,
    overflow: 'hidden',
    shadowColor: 'darkgrey',
  },
  title: {
    backgroundColor: '#91298D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 24,
    paddingVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    padding: 10,
    textAlign: 'center',
  }
})

function SwiperItem({ month, description }) {
  return (
    <View
      width={250}
      height={500}
      loop={false}
      style={styles.slide}
    >
      <Text style={styles.title}>Month {month}</Text>
      <Text style={styles.text}>{description}</Text>
      <Button
        title="Learn More"
        color="#91298D"
        accessibilityLabel={`Learn more about the pregnancy stage at ${month}`}
      />
    </View>
  )
}

export default function SwiperComponent() {
  const slides = stages.map(({ month, description }) => {
    return <SwiperItem month={month} description={description} />
  })

  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      {slides}
    </Swiper>
  )
}
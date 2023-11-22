import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Crausel = () => {
  const images = [
    require('/Users/ayushpriyadarshi/Desktop/ReactNative/first/screen/components/images/1.jpeg'),
    require('first/screen/components/images/image2.jpeg'),
    require('first/screen/components/images/image3.jpeg')
  ]
  return (
    <SafeAreaView >
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="grey"
        inactiveDotColor='black'
        
      />
    </SafeAreaView>


  )
}

export default Crausel;


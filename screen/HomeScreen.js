import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Crausel from './components/Crausel';
import FoodTypes from './components/FoodTypes';
import QuickFood from './components/QuickFood';
import { Ionicons } from '@expo/vector-icons';
import QuickHotel from './components/QuickHotel';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.Searchbar}>
        <TextInput placeholder='Search for resturant item or more' />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <Crausel />
      <FoodTypes />
      <QuickFood />
      <View style={{flexDirection:"row", alignItems:"center", margin:10, justifyContent:"space-between"}}> 
      <Pressable style={{flexDirection:'row', alignItems:'center', marginHorizontal:10,borderWidth:1,borderRadius:20, padding:10, borderColor:'#D0D0D0' }}>
        <Text >Filter   </Text>
        <Ionicons name="ios-filter" size={18} />
      </Pressable>
      <Pressable style={{flexDirection:'row', alignItems:'center', marginHorizontal:10,borderWidth:1,borderRadius:20, padding:10, borderColor:'#D0D0D0' }}>
        <Text>sort By rating</Text>
        
      </Pressable>
      <Pressable style={{flexDirection:'row', alignItems:'center', marginHorizontal:10,borderWidth:1,borderRadius:20, padding:10, borderColor:'#D0D0D0'}}>
        <Text >sort By Price</Text>
        
      </Pressable>
      
      </View>
      
      <QuickHotel />
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  Searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderColor: '#c0c0c0',
    borderRadius: 7
  }
});
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quick from './quick';
import { MaterialIcons } from '@expo/vector-icons';

const QuickFood = () => {
    const info = quick;
    return (
        <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "500", top: 0 }}>Get it Quickly</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator="false">
                {info.map((items, index) => (
                    <Pressable key={index}>
                        <ImageBackground style={{ aspectRatio: 5 / 6, height: 170, margin: 10 }} source={{ uri: items.image }}>
                            <Text style={{ top: 120, fontSize: 27, textAlign: "center", color: "white", fontWeight: "900" }}>{items.offer}OFF</Text>
                        </ImageBackground>
                        <View style={{left:10}}>
                        <Text style={{fontWeight:"500", fontSize:15}}>{items.name}</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" , left:10}}>
                            <MaterialIcons name="stars" size={24} color="green" />


                            <Text> {items.rating} • </Text>
                            <Text>{items.time}mins</Text>
                        </View>



                    </Pressable>
                ))}
            </ScrollView>
        </View >
    )
}

export default QuickFood;

const styles = StyleSheet.create({
})
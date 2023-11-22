import { Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hotels from './Hotels'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



const QuickHotel = () => {
    const data = Hotels;
    return (
        <View>
            <ScrollView>
                {data.map((items, index) => (
                    <Pressable key={index} style={{ flexDirection: "row" }}>
                        <ImageBackground style={{ aspectRatio: 5 / 6, height: 170, margin: 10 }} source={{ uri: items.image }}>
                            <Entypo name="heart-outlined" size={24} color="white" style={{ right: -110, top: 10 }} />
                        </ImageBackground>
                        <View style={{ top: 7, position: "relative" }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>{items.name}</Text>
                            <View style={{ flexDirection: "row", margin: 3, right: 5 }} >
                                <MaterialIcons name="stars" size={24} color="green" />
                                <View style={{ top: 3, flexDirection: "row" }}>
                                    <Text > {items.rating} • </Text>
                                    <Text>{items.time}mins</Text>
                                </View>
                            </View>
                            <Text style={{ color: "#808080" }}>{items.adress}</Text>
                            <View style={{ marginTop: 6, flexDirection: "row" }}>
                                <FontAwesome name="rupee" size={18} color="black" />
                                <Text style={{ fontWeight: "500" }}>  {items.cost_for_two} for two</Text>




                            </View>
                            <View style={{ flexDirection: "row", marginTop: 4 }}>
                                <MaterialIcons name="delivery-dining" size={24} color="black" />
                                <View style={{top:4}}>

                
                                <Text style={{fontSize:13, fontWeight:"500"}}> FREE DELIVERY</Text>
                                </View>

                            </View>


                        </View>

                    </Pressable>



                ))}

            </ScrollView>
        </View>
    )
}

export default QuickHotel;

const styles = StyleSheet.create({})
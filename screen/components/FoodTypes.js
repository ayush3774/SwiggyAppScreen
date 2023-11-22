import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FoodTypes = () => {
    const photos = [{
        id: "1",
        image: "https://media.istockphoto.com/id/1305452646/photo/biryani.jpg?s=612x612&w=0&k=20&c=qndxBx3hBmx6tCkKPUVd8-V4P3QhH4xAkzjU84KqAx4=",
        name: 'Biryani'

    },
    
    {
        id: "2",
        image: "/Users/ayushpriyadarshi/Desktop/ReactNative/first/screen/components/images/burger.jpeg",
        name: 'Burger'

    },
    {
        id: "3",
        image: "/Users/ayushpriyadarshi/Desktop/ReactNative/first/screen/components/images/saladd.jpeg",
        name: 'Salad'

    },
    {
        id: "4",
        image: "/Users/ayushpriyadarshi/Desktop/ReactNative/first/screen/components/images/sandwitch.png",
        name: 'Sandwitches'

    },
    {
        id: "5",
        image: "https://www.tasteofhome.com/wp-content/uploads/2019/05/Fried-Ice-Cream-Dessert-Bars-_EXPS_SDJJ19_232652_B02_06_1b_rms-2.jpghttps://hips.hearstapps.com/hmg-prod/images/wdy050121lifeoftheparty-003-1621611282.jpg?crop=0.998xw:0.337xh;0,0.276xh&resize=1200:*",
        name: 'Dessert'

    }
    ]

    return (
        <View >
            <ScrollView horizontal showsHorizontalScrollIndicator="false" >
                {photos.map((item, index) => (
                    <View key={index} style={{ margin: 10 }}>
                        <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        <Text style={{ textAlign: "center", margin: 10, top: 2 }}>{item.name}</Text>
                    </View>
                ))}

            </ScrollView>

        </View>
    )
}

export default FoodTypes;

const styles = StyleSheet.create({})
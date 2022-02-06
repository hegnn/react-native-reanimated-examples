import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const {width: PAGE_WIDTH} = Dimensions.get("window")

const Page = ({index, title, translateX}) => {

    const pageOffset = PAGE_WIDTH * index

    rStyle = useAnimatedStyle(() => {
        return{
            transform: [
                { translateX: translateX.value + pageOffset}
            ]
        }
    })

    return (
        <Animated.View 
            style={[
                { 
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: `rgba(0, 0, 256, 0.${index + 2})`,
                    justifyContent: "center",
                    alignItems: "center" 
                },
                 rStyle
            ]}
        >
            <Text style={{fontSize: 70, fontWeight: "700", letterSpacing: 1.5, textTransform: "uppercase"}}> {title} </Text>
        </Animated.View>
    )
}

export default Page

import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { interpolateColor, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'

const Dot = ({activeDotIndex, index}) => {

    const isActive = useDerivedValue(() => {
      return activeDotIndex.value === index ? withTiming(1) : withTiming(0)
    }, [])

    const rDotStyle = useAnimatedStyle(()=> {

        const backgroundColor = interpolateColor(
            isActive.value, 
            [0, 1], 
            ["white", "black"]
        )

        return{
            backgroundColor
        }
    })
    console.log(activeDotIndex, index,)
    return (
        <Animated.View style={[styles.dot, rDotStyle]}/>
    )
}

export default Dot

const styles = StyleSheet.create({
    dot:{
        width: 20,
        height: 20,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth:1,

    }
})

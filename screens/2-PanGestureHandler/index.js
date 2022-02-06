import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Animated, { onChange, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const SIZE = 100
const {width: WIDTH} = Dimensions.get("window")

export default function Index() {
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value
      context.translateY = translateY.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX
      translateY.value = event.translationY + context.translateY
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if(distance < WIDTH / 2 + SIZE / 2){
        translateX.value = withSpring(0)
        translateY.value = withSpring(0)
      }
    }
  })

  const rStyle = useAnimatedStyle(() => {
    return{
      transform: [
        {
          translateX: translateX.value
        },
        {
          translateY: translateY.value
        }
      ]
    }
  })

  return (
    <View style={{flex:1}}>
      <Text style={styles.text}>if you drag the ball outside the circle, it stays there; otherwise it returns to the center</Text>
      <GestureHandlerRootView style={styles.container}>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.square, rStyle]} />
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0, 0, 256, 0.5)",
    borderRadius: SIZE,
  },
  circle: {
    width: WIDTH,
    height: WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: WIDTH,
    borderWidth: 5,
    borderColor: "rgba(0, 0, 256, 0.5)",
  },
  text:{
    paddingHorizontal: 10,
    textAlign:"center",
    marginTop: 10,
    fontSize: 15,
    color:"black"
  }
});

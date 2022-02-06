import React, { useCallback, useRef } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated';

const { width: SIZE } = Dimensions.get("window")

export default function index() {
  const scale = useSharedValue(0)
  const opacity = useSharedValue(1)

  const AnimatedImage = Animated.createAnimatedComponent(Image)

  const heartStyle = useAnimatedStyle(() => {
    return{
      transform: [
        {scale: Math.max(scale.value, 0)}
      ]
    }
  })

  const textStyle = useAnimatedStyle(() => {
    return{
      opacity: opacity.value
    }
  })

  const doubleTapRef = useRef()

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if(isFinished){
        scale.value = withDelay(500, withSpring(0))
      }
    })
  }, [])

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, (isFinished) => {
      if(isFinished){
        opacity.value = withDelay(500, withTiming(1))
      }
    })
  }, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={onSingleTap}
      >
        <TapGestureHandler 
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}
        >
          <Animated.View>
            <Text style={styles.text}>Double click to see the heart</Text>
            <ImageBackground 
              source={require('./assets/image.jpeg')} 
              style={styles.image}
            >
            <AnimatedImage 
              source={require('./assets/heart.png')} 
              style={[styles.image, heartStyle]}
              resizeMode={"center"}
            />
            </ImageBackground>
            <Animated.Text style={[styles.text, textStyle]}>Click the photo to lose me</Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: SIZE,
    height: SIZE,
  },
  text: {
    fontSize: 25,
    textAlign: "center"
  }
});

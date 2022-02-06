import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useDerivedValue, useSharedValue, withDecay } from 'react-native-reanimated';
import Page from './Page';

const titles = [ "First", "Second", "Third", "Fourth"]

const {width: PAGE_WIDTH} = Dimensions.get("window")

export default function index() {

  const translateX = useSharedValue(0)

  const clampedTranstaleX = useDerivedValue(() => {
    const MaxTranslateX = -PAGE_WIDTH * (titles.length-1)
    return Math.max(Math.min(translateX.value, 0), MaxTranslateX)
  })

  const panGestureEvent = useAnimatedGestureHandler({
    onStart:(_, context) => {
      context.x = clampedTranstaleX.value
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.x
    },
    onEnd: (event) => {
      translateX.value = withDecay({velocity: event.velocityX})
    }
  })

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={{flex:1, flexDirection: "row"}}>
          {titles.map((title, index) => {
            return (
              <Page 
                key={index} 
                index={index} 
                title={title}
                translateX= {clampedTranstaleX} 
              />
            )
          })}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


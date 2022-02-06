import React from 'react';
import { Button, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { Page } from './Page';

const WORDS = ["First", "Second", "Third", "Fourth"]

const { width, height } = Dimensions.get("window")

export default function index() {
  const translateX = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x
  })
  
  return (
      <Animated.ScrollView 
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false} 
        style={styles.container}
      >
        {WORDS.map((title, index) => {
          return (
              <Page 
              key={index} 
              index={index} 
              title={title} 
              translateX={translateX} 
            />
          )  
        })}
        
      </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


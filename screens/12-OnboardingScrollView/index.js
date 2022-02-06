import React, { useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue } from 'react-native-reanimated';
import Page, { PAGE_WIDTH } from './Page';
import Icon from 'react-native-vector-icons/AntDesign';
import Dot from './Dot';

const BACKGROUND_COLOR = '#F1F1F1';
const PAGES = [
  {
    title: 'Samurai',
    description:
      'A durable deck featured with a menacing face of a samurai at the center of the underside accompanied with a large red sun motif.',
    source: require('./assets/01.png'),
  },
  {
    title: 'Reject',
    description:
      "You don't have time to consider wheter the graphic on your CSS board would be considered modernist.",
    source: require('./assets/02.png'),
  },
  {
    title: 'Great Wave',
    description:
      'The top of the deck has the same matching graphic in black outline and embodies an overall mellow concave.',
    source: require('./assets/03.png'),
  },
]

export default function index() {

  const translateX = useSharedValue(0)

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH)
  })

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x
    }
  })

  const scrollRef = useAnimatedRef()

  const onIconPress = useCallback(() => {
    if(activeIndex.value === PAGES.length -1) return
    scrollRef.current?.scrollTo({x: PAGE_WIDTH * (activeIndex.value +1) })
  }, [])


  return (
    <View style={styles.container}>
      <Animated.ScrollView 
        ref={scrollRef}
        style={{flex: 1}} 
        horizontal 
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      > 
        {PAGES.map((page, index) => (
          <Page key={index.toString()} page={page} translateX={translateX} index={index}  />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
          <View style={[styles.fillCenter, {flexDirection: "row"}]} >
            {PAGES.map((_, index) => 
              <Dot key={index.toString()} activeDotIndex={activeIndex} index={index} />
            )}
          </View>
          <View style={styles.fillCenter} >
            <Text style={styles.text}> View Board </Text>
          </View>
          <View style={styles.fillCenter} >
            <Icon
              name="arrowright"
              size={24}
              color="black"
              onPress={onIconPress}
            />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  footer:{
    height:50,
    marginBottom: 50,
    flexDirection: "row"
  },
  fillCenter:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: "500"
  },
});

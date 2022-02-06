import { FlatList, Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window")

const index = ({navigation}) => {

  const pages = [
    {title: "Pan Gesture Handler", navigate: "PanGestureHandler"},
    {title: "Interpolate ScrollView", navigate: "InterpolateScrollView"},
    {title: "Interpolate Colors", navigate: "InterpolateColors"},
    {title: "Pinch Gesture Handler", navigate: "PinchGestureHandler"},
    {title: "Double Tap", navigate: "DoubleTap"},
    {title: "Scroll Pan Gesture", navigate: "ScrollPanGesture"},
    {title: "Onboarding ScrollView", navigate: "OnboardingScrollView"},
    {title: "Progress Bar", navigate: "ProgressBar"},
    {title: "Color Picker", navigate: "ColorPicker"},
  ]

  const NavigationButton = ({item}) => {
    return(
      <Pressable 
        style={{backgroundColor:"gray", borderColor:"red", margin:10, width: (WIDTH-60)/2, aspectRatio:1, borderRadius: 20, justifyContent:"center", alignItems:"center"}}
        onPress={() => navigation.navigate(item.navigate)}
      >
        <Text style={{fontSize: 20, textAlign:"center", padding: 10}}>{item.title}</Text>
      </Pressable>
    )
  }

  return (
    <View style={{flex:1, padding: 10}}>
      <Text style={{textAlign:"center", fontSize:20, marginVertical:20 }}>Reanimated and Gesture Examples</Text>
      <FlatList
        data={pages}
        numColumns={2}
        keyExtractor={(item,index) => index}
        renderItem={NavigationButton}
      />
      {/* <Pressable onPress={() => navigation.navigate("PanGestureHandler")}>
        <Text>Pan Gesture Handler</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("InterpolateScrollView")}>
        <Text>Interpolate ScrollView</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("InterpolateColors")}>
        <Text>Interpolate Colors</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("PinchGestureHandler")}>
        <Text>Pinch Gesture Handler</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("DoubleTap")}>
        <Text>Double Tap</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("ScrollPanGesture")}>
        <Text>Scroll Pan Gesture</Text>
      </Pressable> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});

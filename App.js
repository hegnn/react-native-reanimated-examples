import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home/index'
import PanGestureHandler from './screens/2-PanGestureHandler/index'
import InterpolateScrollView from './screens/3-InterpolateScrollView/index'
import InterpolateColors from './screens/4-InterpolateColors/index'
import PinchGestureHandler from './screens/5-PinchGestureHandler/index'
import DoubleTap from './screens/6-DoubleTap/index'
import ScrollPanGesture from './screens/7-ScrollPanGesture/index'
import OnboardingScrollView from './screens/12-OnboardingScrollView/index'
import ProgressBar from './screens/9-ProgressBar/index'
import ColorPicker from './screens/8-ColorPicker/index'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="PanGestureHandler" component={PanGestureHandler} options={{title: "Pan Gesture Handler"}}/>
        <Stack.Screen name="InterpolateScrollView" component={InterpolateScrollView} options={{title: "Interpolate ScrollView"}}/>
        <Stack.Screen name="InterpolateColors" component={InterpolateColors} options={{title: "Interpolate Colors"}}/>
        <Stack.Screen name="PinchGestureHandler" component={PinchGestureHandler} options={{title: "Pinch Gesture Handler"}} />
        <Stack.Screen name="DoubleTap" component={DoubleTap} options={{title: "Double Tap"}}/>
        <Stack.Screen name="ScrollPanGesture" component={ScrollPanGesture} options={{title: "Scroll Pan Gesture"}}/>
        <Stack.Screen name="OnboardingScrollView" component={OnboardingScrollView} options={{title: "Onboarding ScrollView"}}/>
        <Stack.Screen name="ProgressBar" component={ProgressBar} options={{title: "Progress Bar", }}/>
        <Stack.Screen name="ColorPicker" component={ColorPicker} options={{title: "Color Picker", }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

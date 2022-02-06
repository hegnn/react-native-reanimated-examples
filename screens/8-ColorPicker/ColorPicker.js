import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ColorPicker = ({colors}) => {
  return (
    <View>
      <LinearGradient colors={colors} style={{height:50, width:"90%"}} />
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({});

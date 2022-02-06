import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ColorPicker from './ColorPicker';

const COLORS = [
    'red',
    'purple',
    'blue',
    'cyan',
    'green',
    'yellow',
    'orange',
    'black',
    'white',
  ]

const index = () => {
  return (
    <>
      <View style={styles.topContainer}/>
      <View style={styles.bottomContainer}>
          <ColorPicker colors={COLORS} />
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
    topContainer:{
        flex:3,
        backgroundColor:"white"
    },
    bottomContainer:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.9)'
    }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ColorPallet from '../../constants/colorPallet';

const MainButton = props => {
  const { style, children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{...styles.button, ...style}}>
        <Text style={{...styles.buttonText, ...style}}>{ children }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorPallet.headerBackground,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

export default MainButton;
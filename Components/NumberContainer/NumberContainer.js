import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ColorPallet from '../../constants/colorPallet';
import BodyText from '../../Components/BodyText/BodyText'
const NumberContainer = props => {
  const { children } = props;
  return (
    <View>
      <BodyText style={styles.confirmedText}> {children} </BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
  },
  confirmedText: {
    fontSize: 18,
    color: ColorPallet.accent,
  },
});

export default NumberContainer;
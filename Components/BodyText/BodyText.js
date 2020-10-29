import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => {
  const { children, style } = props;
  return <Text style={{...styles.bodyText, ...style}}> {children} </Text>;
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
    color: '#666',
  }
});

export default BodyText;
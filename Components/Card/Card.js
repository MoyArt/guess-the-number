import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
  const {style, children } = props;
  return (
    <View style={{ ...styles.card, ...style }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: '#ffffff',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
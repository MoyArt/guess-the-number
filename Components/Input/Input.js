import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import CollorPallet from '../../constants/colorPallet';

const Input = props => {
  const { style } = props;
  return <TextInput {...props} style={{ ...styles.textInput, ...style }} />
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '100%',
    borderBottomColor: CollorPallet.inputBorderBottomColor,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
});

export default Input;

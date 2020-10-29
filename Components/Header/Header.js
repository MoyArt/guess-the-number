import React from 'react';
import { View, StyleSheet } from 'react-native';

import Title from '../Title/Title';
import ColorPallet from '../../constants/colorPallet';

const Header = props => {
  const {title} = props;
  return(
    <View style={styles.header}>
      <Title style={styles.headerTitle}>{title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: ColorPallet.headerBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#000000',
  }
});

export default Header;
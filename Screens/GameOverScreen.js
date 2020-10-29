import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native';

import BodyText from '../Components/BodyText/BodyText';
import Title from '../Components/Title/Title';
import MainButton from '../Components/MainButton/MainButton';
import ColorPallet from '../constants/colorPallet';

const GameOverScreen = props => {
  const { roundsNumber, userNumber, onRestart} = props;
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Title>The Game Is Over</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/success.png')}
            //source={{uri: ''https://96a5aff2-a-62cb3a1a-s-sites.googlegroups.com/site/rosesreadingideas/home/pecos-bill/pecos%20bill.jpg?attachauth=ANoY7coB901dxLt9u_ApdwD4hd84CrbaYOCft6KYwv2i9r91O5nr0Ow_Z3k50-07vvH62OMfhjM2asTs3_x3KyJ4sUXxidxbeyM5cp-v9ilzGUrckYmQ6_B6APRiyS_p_8vG4mgju2O5cHfjLYXuXnBD6LnLooEw4DdXOakQhAN0l5HtoAE8IaXDxcrpaVDI6-LhhOHMV2lUamu4Y6MFWYfbZUvbnx08yTAogohIuty82WQjZ1N_xpVVUx2Rn3eFod5JuqErnFee&attredirects=0}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textWrapper}>
          <BodyText style={styles.resultText}>
            Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the
            number: <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={onRestart}> New Game </MainButton>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: '#666666',
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    width: '80%',
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height > 400 ? 20 : 16,
  },
  highlight: {
    color: ColorPallet.accent,
    fontFamily: 'open-sans-bold',
  }
});

export default GameOverScreen;


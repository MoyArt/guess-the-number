import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../Components/BodyText/BodyText";
import Title from "../Components/Title/Title";
import MainButton from "../Components/MainButton/MainButton";
import ColorPallet from "../constants/colorPallet";

const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, onRestart } = props;
  return (
    <ImageBackground source={require('../assets/images/rainingBackground.gif')} style={styles.backgroundImage} >
      <ScrollView>
        <View style={styles.screen}>
          <Title style={styles.gameOverText}>The Game Is Over</Title>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/images/ninjaWin.gif")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.textWrapper}>
            <BodyText style={styles.resultText}>
              Your Phone needed{" "}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
              the number: <Text style={styles.highlight}>{userNumber}</Text>
            </BodyText>
          </View>
          <MainButton onPress={onRestart}> New Game </MainButton>
        </View>    
      </ScrollView>
    </ImageBackground>
  );
};

/**
 * @name styles
 * @description Create App design style rules.
 * @param {Object} Object containing the style rules.
 */
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  gameOverText: {
    color: '#ffffff',
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: ColorPallet.headerBackground,
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textWrapper: {
    width: "80%",
    marginTop: 15,
    marginBottom: 30,
  },
  resultText: {
    textAlign: "center",
    color: '#ffffff',
    fontSize: Dimensions.get("window").height > 400 ? 20 : 16,
    backgroundColor: '#00000070',
    padding: 20,
    marginBottom: 30,
  },
  highlight: {
    color: ColorPallet.headerBackground,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;

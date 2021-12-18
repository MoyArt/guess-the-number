import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Header from './Components/Header/Header';
import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';

/**
* @name fetchFonts
* @description This method is used to fetch custom fonts
*/
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

/**
* @name App
* @description App Component  
*/
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  /**
  * @name configureNewGameHandler
  * @description Method to configure a new game.
  * Sets the guess rounds as 0 and the user number as null.  
  */
  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  /**
  * @name startGameHandler
  * @description Sets the user selected number.
  * @param {Number} selectedNumber The selected number.
  */
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  /**
  * @name gameOverHandler
  * @description Sets the number of rounds from the computer
  * to guess the number.
  * @param {Number} numOfRounds The number of rounds.
  */
  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.mainWrapper}>
      <Header title="Guess the Number" />
      { content }
    </View>
  );
}

/**
* @name styles
* @description Create App design style rules.
* @param {Object} Object containing the style rules.
*/
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
});

import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import Card from "../Components/Card/Card";
import NumberContainer from "../Components/NumberContainer/NumberContainer";
import MainButton from "../Components/MainButton/MainButton";
import BodyText from "../Components/BodyText/BodyText";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const renderValue = (item, index, roundNumber) => {
  return (
    <View key={index} style={styles.listItem}>
      <BodyText>#{roundNumber}</BodyText>
      <Text>{item}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const { userChoice, onGameOver } = props;
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Dont Lie!!", "Im watching you!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuesses((currentPastGuesses) => [nextNumber, ...currentPastGuesses]);
  };
  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="#0D1B2A" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" size={24} color="#0D1B2A" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderValue(guess, index, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

/**
 * @name styles
 * @description Create App design style rules.
 * @param {Object} Object containing the style rules.
 */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "80%",
  },
  listContainer: {
    flex: 1,
    width: Dimensions.get("window").width > 300 ? "80%" : "90%",
    paddingVertical: 20,
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
});

export default GameScreen;

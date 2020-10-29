import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  Alert,
  Dimensions,
} from "react-native";
import Card from "../Components/Card/Card";
import Input from "../Components/Input/Input";
import MainButton from "../Components/MainButton/MainButton";
import ColorPallet from "../constants/colorPallet";
import NumberContainer from "../Components/NumberContainer/NumberContainer";
import BodyText from "../Components/BodyText/BodyText";

const StartGameScreen = (props) => {
  const { onStartGame } = props;
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
    Keyboard.dismiss();
  };

  const confirmedInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Please Choose a Number from 1 to 99", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
  };

  const confirmedComponent = (
    <Card style={styles.confirmedComponent}>
      <NumberContainer>The entered Number is: {selectedNumber}</NumberContainer>
      <MainButton onPress={() => onStartGame(selectedNumber)}>
        Start Game
      </MainButton>
    </Card>
  );

  const confirmedOutput = confirmed ? confirmedComponent : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={require('../assets/images/rainingBackground.gif')} style={styles.backgroundImage} >
        <View style={styles.mainWrapper}>
          <BodyText style={styles.title}>Start a new game!</BodyText>
          <Card style={styles.inputContainer}>
            <BodyText>Select a Number</BodyText>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="numeric"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  color={ColorPallet.primary}
                  onPress={resetInputHandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  color={'#000000'}
                  onPress={confirmedInputHandler}
                />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  mainWrapper: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: '#FAF33E',
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
    marginVertical: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: Dimensions.get("window").width / 4,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  confirmedComponent: {
    width: 300,
    maxWidth: "80%",
    marginVertical: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartGameScreen;

import { Alert, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import Title from "../components/ui/title";
import OpponentGuess from "../components/game/opponent-guess";
import PrimaryButton from "../components/ui/primary-button";
import Card from "../components/ui/card";
import HintText from "../components/ui/hint-text";

const generateRandomNumber = (min, max, exclude) => {
  let randNum = Math.floor(Math.random() * (max - min)) + min;

  if (min === max - 1 && randNum === exclude) {
    return exclude === min ? max : min;
  }

  if (randNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, endGame }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Wrong lead", "Do not mislead the computer!", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandNum = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandNum);
  };

  useEffect(() => {
    if (currentGuess == userNumber) {
      endGame();
      minBoundary = 1;
      maxBoundary = 100;
    }
  }, [currentGuess, userNumber, endGame]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <OpponentGuess guess={currentGuess} />
      <Card>
        <HintText>Higher or Lower?</HintText>
        {/* + - */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuess.bind(this, "higher")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    // paddingHorizontal: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
  },
});

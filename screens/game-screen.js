import {
  Alert,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import Title from "../components/ui/title";
import OpponentGuess from "../components/game/opponent-guess";
import PrimaryButton from "../components/ui/primary-button";
import Card from "../components/ui/card";
import HintText from "../components/ui/hint-text";
import GuessContainer from "../components/game/guess-container";

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
let maxBoundary = 1000;

const GameScreen = ({ userNumber, endGame, setGuessRounds }) => {
  const initialGuess = generateRandomNumber(1, 1000, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedRounds, setGuessedRounds] = useState([initialGuess]);

  const { width } = useWindowDimensions();

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
    setGuessedRounds((prevGoals) => [...prevGoals, newRandNum]);
  };

  useEffect(() => {
    if (currentGuess == userNumber) {
      setGuessRounds(guessedRounds.length);
      endGame();
      minBoundary = 1;
      maxBoundary = 1000;
    }
  }, [currentGuess, userNumber, endGame]);

  let content = (
    <>
      <OpponentGuess guess={currentGuess} />
      <Card>
        <HintText>Higher or Lower?</HintText>
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
      <Text style={styles.logs}>LOG ROUNDS</Text>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuess.bind(this, "higher")}>
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <OpponentGuess guess={currentGuess} />
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}>
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <GuessContainer guessedRounds={guessedRounds} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: 'center'
  },
  button: {
    flex: 1,
  },
  logs: {
    marginTop: 20,
    color: "white",
    fontSize: 22,
    fontFamily: "open-sans-bold",
  },
});

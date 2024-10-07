import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/primary-button";
import COLORS from "../constants/colors";
import Title from "../components/ui/title";
import Card from "../components/ui/card";
import HintText from "../components/ui/hint-text";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleInput = (num) => {
    setEnteredNumber(num);
  };

  const resetInput = () => {
    setEnteredNumber("");
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || enteredNumber <= 0) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetInput,
        },
      ]);
      return;
    } else {
      props.entered(enteredNumber);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <HintText>Enter a number</HintText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="numeric"
          onChangeText={handleInput}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  textInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.accent500,
    paddingVertical: 5,
    color: COLORS.accent500,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center'
  }
});

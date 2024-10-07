import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../components/ui/title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/ui/primary-button";

const GameOver = ({userNumber}) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone guessed the correct number,{" "}
        <Text style={styles.highlightedText}>{userNumber}</Text>, after{" "}
        <Text style={styles.highlightedText}>Y</Text> trials
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: 'center'
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: COLORS.primary500,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },
  highlightedText: {
    color: COLORS.primary500,
    fontFamily: "open-sans-bold",
    fontSize: 28
  },
});

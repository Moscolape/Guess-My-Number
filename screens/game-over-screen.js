import {
  Image,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/title";
import COLORS from "../constants/colors";
import PrimaryButton from "../components/ui/primary-button";

const GameOver = ({ userNumber, resetGame, guessTrials }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let fontSize = 22;

  if (width > 400) {
    imageSize = 200;
    fontSize = 18;
  }

  if (height < 400) {
    imageSize = 150;
    fontSize = 18;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={[styles.summaryText, { fontSize: fontSize }]}>
        Your phone needed{" "}
        <Text style={styles.highlightedText}>{guessTrials}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlightedText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={resetGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    overflow: "hidden",
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
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  highlightedText: {
    color: COLORS.primary500,
    fontFamily: "open-sans-bold",
  },
});

import { useState, useCallback } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/start-game-screen";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import GameScreen from "./screens/game-screen";
import COLORS from "./constants/colors";
import GameOver from "./screens/game-over-screen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const handleUserNumber = (num) => {
    setUserNumber(num);
    setIsGameOver(false);
  };

  const endGame = useCallback(() => {
    setIsGameOver(true);
  }, []);

  let screen = <StartGameScreen entered={handleUserNumber} />;

  if (userNumber && !isGameOver) {
    screen = <GameScreen userNumber={userNumber} endGame={endGame}/>;  // Game running
  }
  
  if (isGameOver && userNumber) {
    screen = <GameOver />;
  }
  

  return (
    <LinearGradient colors={[COLORS.primary700, COLORS.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center"
  },
  backgroundImage: {
    opacity: 0.2,
  },
});

import { useState, useCallback, useEffect } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from "./screens/start-game-screen";
import GameScreen from "./screens/game-screen";
import GameOver from "./screens/game-over-screen";
import COLORS from "./constants/colors";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const handleUserNumber = (num) => {
    setUserNumber(num);
    setIsGameOver(false);
  };

  const endGame = useCallback(() => {
    setIsGameOver(true);
  }, []);

  if (!appIsReady) {
    return null;
  }

  let screen = <StartGameScreen entered={handleUserNumber} />;

  if (userNumber && !isGameOver) {
    screen = <GameScreen userNumber={userNumber} endGame={endGame} />;
  }

  if (isGameOver && userNumber) {
    screen = <GameOver userNumber={userNumber} />;
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
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
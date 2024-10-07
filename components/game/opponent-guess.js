import { StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const OpponentGuess = ({guess}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{guess}</Text>
    </View>
  )
}

export default OpponentGuess;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    margin: 24,
    padding: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})
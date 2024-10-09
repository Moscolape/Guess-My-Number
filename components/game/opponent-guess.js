import { Dimensions, StyleSheet, Text, View } from "react-native";
import COLORS from "../../constants/colors";

const OpponentGuess = ({guess}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{guess}</Text>
    </View>
  )
}

export default OpponentGuess;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    margin: deviceWidth < 400 ? 12 : 24,
    padding: deviceWidth < 400 ? 12 : 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '90%'
  },
  numberText: {
    color: COLORS.accent500,
    fontSize: deviceWidth < 400 ? 26 : 36,
    fontFamily: 'open-sans-bold'
  }
})
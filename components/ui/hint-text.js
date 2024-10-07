import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

const HintText = ({children}) => {
  return (
    <Text style={styles.instruction}>{children}</Text>
  )
}

export default HintText;

const styles = StyleSheet.create({
  instruction: {
    color: COLORS.accent500,
    fontSize: 20,
    fontWeight: "700"
  }
})
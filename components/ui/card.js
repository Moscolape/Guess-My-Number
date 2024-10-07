import { StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary800,
    padding: 20,
    marginTop: 30,
    borderRadius: 10,
    marginHorizontal: "5%",
    // Android
    elevation: 5,
    // iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});

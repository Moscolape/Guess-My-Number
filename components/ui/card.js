import { Dimensions, StyleSheet, View } from "react-native";
import COLORS from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    maxWidth: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary800,
    padding: deviceWidth < 400 ? 15 : 20,
    marginTop: deviceWidth < 400 ? 20 : 30,
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

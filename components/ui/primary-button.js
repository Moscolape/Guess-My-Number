import { StyleSheet, Text, View, Pressable } from "react-native";
import COLORS from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  const onPressFunction = () => {
    onPress();
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressFunction}
        android_ripple={{ color: COLORS.primary600 }}
        // to accommodate iOS
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary500,
    elevation: 10,
  },
  button: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

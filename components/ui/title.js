import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: "white",
    textAlign: "center",
    padding: 10,
    borderWidth: Platform.select({ios: 0, android: 2}),
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: "white",
    maxWidth: '80%'
  },
});

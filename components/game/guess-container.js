import { StyleSheet, View, FlatList, Text } from "react-native";

const GuessContainer = ({ guessedRounds }) => {
  return (
    <View style={styles.guessContainer}>
      <FlatList
        data={guessedRounds}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.guess}>
              ROUND {index + 1}: Opponent guessed{" "}
              <Text style={styles.guessedNumber}>{item}</Text>
            </Text>
          );
        }}
        keyExtractor={(item) => item}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default GuessContainer;

const styles = StyleSheet.create({
  guessContainer: {
    margin: 10,
    width: "90%",
    maxHeight: 250,
  },
  guess: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    fontFamily: "open-sans",
  },
  guessedNumber: {
    fontWeight: "800",
    fontSize: 20,
  },
});

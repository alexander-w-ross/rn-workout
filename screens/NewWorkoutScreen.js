import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

const NewWorkoutScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>New Workout screen</Text>
      </View>
      <View style={styles.addButton}>
        <Ionicons name="ios-add-circle" size={45} color="green" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
  },
  addButton: {
    justifyContent: "flex-end",
  },
});
export default NewWorkoutScreen;

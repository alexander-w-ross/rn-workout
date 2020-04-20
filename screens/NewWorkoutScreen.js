import React from "react";
import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import AddExerciseButton from "../components/AddExerciseButton";

const NewWorkoutScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>New Workout screen</Text>
      </View>
      <View style={styles.addButton}>
        <AddExerciseButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 50 : 0,
  },
  card: {
    flex: 1,
  },
  addButton: {
    width: "100%",
    height: 50,
    // backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
  },
});
export default NewWorkoutScreen;

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AddExerciseButton from "../components/AddExerciseButton";

const AllWorkoutsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>All Workouts</Text>
      <View style={styles.addButton}>
        <AddExerciseButton />
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
  addButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
export default AllWorkoutsScreen;

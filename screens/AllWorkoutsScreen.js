import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AllWorkoutsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>All Work outs</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AllWorkoutsScreen;

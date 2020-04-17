import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllWorkoutsScreen from "./screens/AllWorkoutsScreen";
import NewWorkoutScreen from "./screens/NewWorkoutScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All Workouts" component={AllWorkoutsScreen} />
        <Tab.Screen name="New Workout" component={NewWorkoutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

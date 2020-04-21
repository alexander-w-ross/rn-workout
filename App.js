import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllWorkoutsScreen from "./screens/AllWorkoutsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <Provider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All Workouts" component={AllWorkoutsScreen} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    //</Provider>
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

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../constants/Colors";
import AddExerciseModal from "./AddExerciseModal";
import { Ionicons } from "@expo/vector-icons";

const AddExerciseButton = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const modalOpenHandler = () => {
    return setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.centeredView}>
      <AddExerciseModal
        toggleModal={modalOpenHandler}
        isVisible={modalVisible}
      />
      <View style={styles.button}>
        <TouchableHighlight
          onPress={modalOpenHandler}
          underlayColor={"transparent"}
        >
          <Ionicons name="ios-add-circle" size={70} color={Colors.primary} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    height: 80,
    bottom: 15,
    right: 10,
  },
});
export default AddExerciseButton;

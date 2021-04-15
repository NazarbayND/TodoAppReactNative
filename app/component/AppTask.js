import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppTask = ({ title, onDelete }) => {
  const [color, setColor] = useState("#fff");
  const onPress = () => {
    color === "#fff" ? setColor("#bada55") : setColor("#fff");
  };
  return (
    <TouchableHighlight
      underlayColor="#a6e2eb"
      onPress={() => {
        onPress();
      }}
    >
      <Swipeable
        renderRightActions={() => (
          <TouchableWithoutFeedback onPress={onDelete}>
            <View style={styles.swipe}>
              <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={"#fff"}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      >
        <View style={[styles.task, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Swipeable>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  task: {
    justifyContent: "center",
    padding: 15,
  },
  text: {
    fontSize: 18,
  },
  swipe: {
    width: 70,
    backgroundColor: "#ff5252",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppTask;

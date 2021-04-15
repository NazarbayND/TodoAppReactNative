import React, { useState, useRef } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const AppTextInput = ({ onSubmit }) => {
  const [textInput, setTextInput] = useState("");

  const onSubmitThis = () => {
    if (textInput.length === 0) return;
    onSubmit(textInput);
    setTextInput("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.textview}>
        <TextInput
          autoFocus
          value={textInput}
          style={styles.textinput}
          placeholder="new to do"
          onChangeText={(t) => setTextInput(t)}
          onSubmitEditing={onSubmitThis}
        />
      </View>

      <Button title="Add" onPress={onSubmitThis} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textview: {
    width: "80%",
  },
  textinput: { fontSize: 18 },
});
export default AppTextInput;

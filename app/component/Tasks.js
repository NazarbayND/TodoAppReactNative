import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import AppTask from "./AppTask";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <AppTask title={item.title} onDelete={() => onDelete(item)} />
      )}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 2,
    backgroundColor: "#e5e5e5",
  },
});

export default Tasks;

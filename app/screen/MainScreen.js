import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import AppTextInput from "../component/AppTextInput";
import Tasks from "../component/Tasks";

const initialTasks = [
  {
    id: 1,
    title: "First to be done",
  },
  {
    id: 2,
    title: "Second to be done",
  },
  {
    id: 3,
    title: "Third to be done",
  },
];
let i = 4;
const MainScreen = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const handleDelete = (item) => {
    const newTasks = tasks.filter((t) => t.id !== item.id);
    setTasks(newTasks);
  };
  const handleAdd = (text) => {
    setTasks([...tasks, { id: i++, title: text }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppTextInput onSubmit={handleAdd} />
      <Tasks tasks={tasks} onDelete={handleDelete} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  card: {
    height: 30,
    backgroundColor: "#fff",
  },
});
export default MainScreen;

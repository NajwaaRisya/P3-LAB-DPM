import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task.title}</Text>
      <Button title="Delete" onPress={() => deleteTask(task.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFD1DC',
    borderRadius: 5,
  },
  text: { flex: 1 },
});

export default TaskItem;

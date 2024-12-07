import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import AddTaskInput from '../components/AddTaskInput';
import TaskItem from '../components/TaskItem';
import { logLifecycle } from '../data/logger';

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    logLifecycle('TodoScreen', 'Component Mounted');
    return () => {
      logLifecycle('TodoScreen', 'Component Unmounted');
    };
  }, []);

  useEffect(() => {
    logLifecycle('TodoScreen', `Task Count Changed: ${tasks.length}`);
    setTaskCount(tasks.length);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), title: task }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>THINGS TO DO</Text>
      <AddTaskInput addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} deleteTask={deleteTask} />
        )}
      />
      <Text style={styles.footer}>Total Tasks: {taskCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center', 
    color: 'pink', 
  },
  footer: { marginTop: 20, textAlign: 'center' },
});

export default TodoScreen;
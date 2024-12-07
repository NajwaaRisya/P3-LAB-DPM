import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTaskInput = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 50 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FFD1DC',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default AddTaskInput;

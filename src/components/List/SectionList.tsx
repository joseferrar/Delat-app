import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PostCard from '../../Card/PostCard';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async (updatedTasks: any) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = () => {
    if (newTask) {
      const updatedTasks: any = [
        ...tasks,
        {text: newTask, id: Date.now().toString()},
      ];
      setTasks(updatedTasks);
      saveTasks(updatedTasks);
      setNewTask('');
      Keyboard.dismiss();
    }
  };

  const deleteTask = (taskId: any) => {
    const updatedTasks = tasks.filter((task: any) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <View>
      <TextInput
        value={newTask}
        onChangeText={text => setNewTask(text)}
        placeholder="Add a new task"
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={addTask}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}) => (
          <PostCard title={item.text} onPress={() => deleteTask(item.id)} />
        )}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 60,
    bottom: 60,
  },
  input: {
    borderColor: '#7F00FF',
    // width: "95%",
    // marginLeft: 'center',
    // marginRight: 'center',
    margin: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#26653A',
    paddingHorizontal: 50,
    paddingVertical: 15,
    margin: 12,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

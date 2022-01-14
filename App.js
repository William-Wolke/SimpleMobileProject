/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import {
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Keyboard,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './components/Task';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
   /*<SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
  style={backgroundStyle}>*/
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          style={styles.container}>
          <View styles={styles.tasksWrapper}>
            {/*Titel*/}
            <Text style={styles.sectionTitle}>Todays tasks</Text>
            
            <View style={styles.items}>
              {/*Tasks*/}
              {
                taskItems.map((item, index) => {
                  return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item} />
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

          {/*Write a task*/}
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.writeTaskWrapper}>
              <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} ></TextInput>

              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>

        </View>
      /*</ScrollView>
    </SafeAreaView>*/
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'E8EAED',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {},
});

export default App;

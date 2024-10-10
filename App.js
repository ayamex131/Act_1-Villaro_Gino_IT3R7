import { StatusBar } from 'expo-status-bar';
import { Platform, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Tasks from './components/Tasks';

import React, {useState} from 'react';



export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

        <ScrollView
          contentContainerStyle={{
               flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
        >


        <View style = {styles.taskContainer}>
                <Text textDecorationColor = 'white' style = {styles.taskHeader}>

                  TO DO LIST (HAHAYS KAPOY)

                </Text>
            

              <View style ={styles.taskName}>
              {
                    taskItems.map((item, index) => {
                      return (
                        <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                          <Tasks text={item} /> 
                        </TouchableOpacity>
                      )
                    })
                  }

              



                </View>
              </View>
      </ScrollView> 

      <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" | "android" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

      </View>
  
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  
  },
  taskContainer: {
    backgroundColor: '#550000',
    borderBottomColor: "white",
    borderWidth: 0.5,
    paddingTop: 80,
    paddingHorizontal: 20
    

  },
  taskHeader: {
    fontSize: 30,
    fontWeight : 'bold',
    fontFamily: 'monospace',
    color: "white",
    alignContent: "center",
    marginBottom: 20,
    textAlign: "center",
    
  },
  taskName: {
    marginTop: 30,
    color: 'white'

  
  },
  items: {
    marginTop: 30,
    color: 'white'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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

import './App.css';
import CustomButton from './Component/CustomButton';
import CustomInput from './Component/CustomInput';
import Header from './Component/Header';
import Card from './Component/Card';
import { useState, useEffect } from 'react';
import { app } from './firebase_setup/firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import LoginScreen from './LoginScreen';
const db = firebase.firestore();

function Task() {
  //const db = getFirestore(app);
  //const db = firebase.firestore();
  const [add, setAdd] = useState(false);
  const [Tasks, setTasks] = useState([]);

  const [singleTask, setSingleTask] = useState('');
  const [singleDes, setSingleDes] = useState('');

  // Add a new task to the database
  const addTask = async (task) => {
    await db.collection("tasks").add(task);
  };

  // Get all tasks from the database
  const getTasks = async () => {
    const querySnapshot = await db.collection("tasks").get();
    const tasks = [];
    querySnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    setTasks(tasks);
  };

  // Update a task in the database
  // Update a task in the database
const updateTask = async (id, updates) => {
  try {
    await db.collection("tasks").doc(id).update(updates);
  } catch (error) {
    if (error.code === "not-found") {
      console.log(`No document found with ID: ${id}`);
    } else {
      console.error(error);
    }
  }
};


  // Delete a task from the database
  const deleteTask = async (id) => {
    await db.collection("tasks").doc(id).delete();
  };

  useEffect(() => {
    getTasks();
  }, []);

  const UpdateTask = (id) => {
    updateTask(id, { complete: true });
    getTasks();
  };

  const deleteTaskFromState = (id) => {
    deleteTask(id);
    getTasks();
  };

  const addToCard = async () => {
    const taskDetail = {
      task: singleTask,
      des: singleDes,
      complete: false,
    };
    await addTask(taskDetail);
    getTasks();
  };

  const ClearInput = () => {
    setSingleTask('');
    setSingleDes('');
  };

  const handleCustomTask = (event) => {
    setSingleTask(event.target.value);
  };

  const handleCustomDes = (event) => {
    setSingleDes(event.target.value);
  };

  const handleInput = () => {
    setAdd(!add);
  };

  return (
    
    <div className='main'>
      <div className='inputSection'>
        <Header handleInput={handleInput} />
        {add == true ? (
          <>
            <CustomInput
              value={singleTask}
              placeHolder='Enter Task'
              name='Task'
              change={handleCustomTask}
            />
            <CustomInput
              value={singleDes}
              placeHolder='Enter Description'
              name='Description'
              change={handleCustomDes}
            />
            <div className='btnwrapper'>
              <CustomButton
                color='White'
                bg='#1877F2'
                name='Save Task'
                click={addToCard}
              />
              <CustomButton color='White' bg='red' name='Cancle' click={ClearInput} />
            </div>
          </>
        ) : null}
      </div>

      <div className='cardSection'>
        {Tasks.map((t) => (
          <Card
            title={t.task}
            des={t.des}
            key={t.id}
            delete={() => deleteTaskFromState(t.id)}
            update={() => UpdateTask(t.id)}
            complete={t.complete}
          />
        ))}
      </div>
    </div>
  );
}

export default Task;










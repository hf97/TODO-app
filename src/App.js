import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase'
import './App.css';
import Todo from './Todo.js'
import db from './firebase.js'

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>TODO</h1>

      <FormControl>
        <InputLabel>Write a TODO</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button type='submit' disabled={!input} onClick={addTodo} variant='contained' color='primary'>
        Add Todo
      </Button>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;

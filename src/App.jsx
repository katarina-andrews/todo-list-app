import React, { useState, useEffect } from 'react';
import { scanTodos, createTodo } from './dynamo.js';


function App() {

  const [todos, setTodos] = useState([]); // the array where scanCommand will save the information 
  const [text, setText] = useState(''); // string that is representing the text that you want to save in the table 


  // The useEffect hook is called every time the component is showed to the user 
  // onload event on html
  useEffect(() => {
    scanTodos(setTodos)
  }, []);

  const changeHandlerText = (event) => {

    const data = event.target.value
    setText(data)

  }

  const createHandler = () => {

    const item = {
      id: Date.now().toString(),
      text: text,
      completed: false
    }

    createTodo(item)
    window.location.reload()

  }

  return (
    <>
      <div style={{ padding: 20 }}>
        <h1>Todo App</h1>
        <input
          value={text}
          onChange={changeHandlerText}
          style={{ marginRight: 8 }}
        />

        <button onClick={createHandler} >Send Data</button>

        <ul style={{ marginTop: 16 }}>
          {todos.map(t => (
            <li key={t.id}>{t.text}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
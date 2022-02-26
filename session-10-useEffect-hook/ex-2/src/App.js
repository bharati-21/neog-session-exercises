import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    if(todoItems.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todoItems));
      console.log(todoItems);
    }
  }, [todoItems]);

  useEffect(() => {
    setTodoItems(JSON.parse(localStorage.getItem('todos')))
  }, [])

  
  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={e => setTodoItems(prevTodoItems => [...prevTodoItems, {item: todo, id: prevTodoItems.length+1}])}>Add Todo</button>
      <ul>
        {
          todoItems.map(todoItem => <li key={todoItem.id}>{todoItem.item}</li>)
        }
      </ul>
    </div>
  )
}

export default App;

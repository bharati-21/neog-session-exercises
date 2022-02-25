import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid'

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState('');

  const addItem = event => {
    setTodoItems(prevTodoItems => [{id: nanoid(), todo, isComplete: false, isLiked: false}, ...prevTodoItems]);
    setTodo('');
  }

  const completeItem = (e, item) => {
    setTodoItems(prevTodoItems => prevTodoItems.map(prevTodo => (prevTodo.id === item.id ? {...prevTodo, isComplete: !item.isComplete}: {...prevTodo})));
  }

  const toggleLiked = (e, item) => {
    setTodoItems(prevTodoItems => prevTodoItems.map(prevTodo => (prevTodo.id === item.id ? {...prevTodo, isLiked : !item.isLiked}: {...prevTodo})));
  }

 return (
   <div className='App'>
     <input value={todo} onChange={e => setTodo(e.target.value)}/> 
     <button onClick={addItem}>Add Todo</button>

     
      <ul>
        {
          todoItems.map(todoItem => <li key={todoItem.id} style={{textDecoration: todoItem.isComplete ? 'line-through':'none'}}>
              <span onClick={e => completeItem(e, todoItem)}>{todoItem.todo}</span>
              <button onClick={e => toggleLiked(e, todoItem)}>{todoItem.isLiked ? 'Dislike': 'Like'}</button>
            </li> 
          )
        }
      </ul>
   </div>
 )
}

export default App;

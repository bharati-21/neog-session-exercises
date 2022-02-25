import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid'

const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [todo, setTodo] = useState('');

  const addItem = event => {
    setTodoItems(prevTodoItems => [{id: nanoid(), todo, isComplete: false}, ...prevTodoItems]);
    setTodo('');
  }

  const completeItem = (e, item) => {
    const selectedItem = todoItems.find(todoItem => todoItem.id === item.id);
    setTodoItems(prevTodoItems => prevTodoItems.map(prevTodo => (prevTodo.id === item.id ? {...prevTodo, isComplete: !item.isComplete}: {...prevTodo})));
  }

 return (
   <div className='App'>
     <input value={todo} onChange={e => setTodo(e.target.value)}/> 
     <button onClick={addItem}>Add Todo</button>

     
      <ul>
        {
          todoItems.map(todoItem => <li key={todoItem.id} style={{textDecoration: todoItem.isComplete ? 'line-through':'none'}} onClick={e => completeItem(e, todoItem)}>
              {todoItem.todo}
            </li> 
          )
        }
      </ul>
   </div>
 )
}

export default App;

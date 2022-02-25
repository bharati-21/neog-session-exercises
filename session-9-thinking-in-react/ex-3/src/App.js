import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={(e) => setCount(prevCount => prevCount - 1)}>-</button>
      <div>{count}</div>
      <button onClick={(e) => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;

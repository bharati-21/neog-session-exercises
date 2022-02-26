import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('After render', counter);
  });

  // Live Q01 print hey once fix
  useEffect(() => {
    console.log('Hey! The counter is', counter);
  }, [])

  const incrementCounter = e => {
    console.log('In the increment handler', counter);
    setCounter(prevCounter => prevCounter+1);
    console.log('In the increment handler 2', counter);
  };

  const decrementCounter = e => {
    console.log('In the increment handler', counter);
    setCounter(prevCounter => prevCounter - 1);
    console.log('In the increment handler 2', counter);
  }

  console.log('Just before render', counter);
  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      {counter}
      <button onClick={incrementCounter}>+</button>
    </div>
  )
}

export default App;

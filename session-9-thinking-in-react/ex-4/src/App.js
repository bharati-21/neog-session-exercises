import './App.css';
import React, {useState} from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('');

  const toggleBackground = event => backgroundColor === '' ? setBackgroundColor('red') : setBackgroundColor('');
  return (
    <div className="App">
      <p style={{backgroundColor : backgroundColor}}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      <button onClick={toggleBackground}>Toggle Background</button>
    </div>
  );
}

export default App;

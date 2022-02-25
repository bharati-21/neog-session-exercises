import './App.css';
import React, {useState} from 'react';

function App() {
  const [age, setAge] = useState();
  const [showError, setShowError] = useState(false);

  const checkAgeLessThan18 = e => {
    setShowError(age < 18)
  }
    ;
  return (
    <div className="App">
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={checkAgeLessThan18}>Submit</button>
      {showError ? <div>Age is less than 18</div> : null}
    </div>
  );
}

export default App;

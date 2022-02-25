import './App.css';
import React, {useState} from 'react'

function App() {
  const [password, setPassword] = useState('');
  const [retypePassword, setretypePassword] = useState('');
  const [showError, setShowError] = useState(false);
  
  const checkPassword = event => {
    console.log(password, retypePassword)
    password !== '' && retypePassword !== '' ? password !== retypePassword ? setShowError(true) : setShowError(false) : setShowError(false);
  };

  return (
    <div className="App">
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" value={retypePassword} onChange={(e) => setretypePassword(e.target.value)} />
      <button onClick={checkPassword}>Submit</button>

      {
        showError && <div>password Mismatch</div>
      }
    </div>
  );
}

export default App;

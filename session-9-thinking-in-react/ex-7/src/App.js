import './App.css';
import {useState} from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const checkPassword = event => {
      const pwd = event.target.value;
      setPassword(event.target.value);
      if(pwd !== '') {
        if(pwd.match(/\d+/) && pwd.match(/[A-Za-z]+/)) {
          setShowError(false);
        }
        else {
          setShowError(true);
        }
      }
  }

  return (
    <div className="App">
      <form>
        <input type="password" value={password} onChange={checkPassword}></input>
        {showError && <div>Password must contain at least one number and letter</div>}
      </form>
    </div>
  );
}

export default App;

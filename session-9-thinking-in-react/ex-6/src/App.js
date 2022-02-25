import './App.css';
import {useState} from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [ShowError, setShowError] = useState(false);

  const matchPasswords = event => {
    event.preventDefault();
    if(password && retypePassword && password !== retypePassword) {
      setShowError(true);
    }
    else {
      setShowError(false);
    }
  }

  return (
    <div className="App">
      <form>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)}></input>
        <input type="submit" value="Submit" onClick={matchPasswords}></input>
      </form>
      {ShowError && <div>Password Mismatch</div>}
    </div>
  );
}

export default App;

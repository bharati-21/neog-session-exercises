import './App.css';
import {useState} from 'react';

const App = () => {

  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const submitPasswords = event => {
    event.preventDefault();
    console.log(`Password - ${password}`);
    console.log(`Retype Password - ${retypePassword}`);
  }

  return (
    <div className="App">
      <form onSubmit={submitPasswords}>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        <input type="password" value={retypePassword} onChange={(e) =>  setRetypePassword(e.target.value)}></input>
        <input type="submit" value="Submit" disabled={ password === '' || retypePassword === '' || password !== retypePassword}></input>
      </form>
    </div>
  );
}

export default App;

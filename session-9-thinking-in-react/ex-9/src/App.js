import './App.css';
import {useState} from 'react';

const App = () => {

  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const resetPassword = event => {
    event.preventDefault();

    (password !== null && retypePassword !== null && retypePassword !== password) ? setError(true) : setError(false);

    password!==null && retypePassword !== null &&  retypePassword === password ? setShowSuccessMessage(true) : setShowSuccessMessage(false);
  }

  const togglePassword = event => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const toggleRetypePassword = event => {
    setShowRetypePassword(prevShowRetypePassword => !prevShowRetypePassword)
  }

  return (
    <div className="App">
      <form onSubmit={resetPassword}>
        <div>
          <input type={(password !==null && showPassword) ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="button" onClick={togglePassword}>{showPassword ? "Hide Password" : "Show Password" }</button>
        </div>
        <div>
          <input type={retypePassword !==null && showRetypePassword ? "text" : "password"} value={retypePassword} onChange={e => setRetypePassword(e.target.value)}/>
          <button type="button" onClick={toggleRetypePassword}>{showRetypePassword ? "Hide Retype Password" : "Show Retype Password" }</button>
        </div>
        <input type="submit" value="Reset Password" />
      </form>
      {error ? <div>Error. Password Mismatch</div> : showSuccessMessage && <div>Password Reset Successfully</div>}
    </div>
  );
}

export default App;

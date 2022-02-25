import './App.css';
import {useState} from 'react';

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme}`}>
        <button onClick={e => setTheme(prevTheme => prevTheme === 'dark' ? 'light': 'dark')}>Toggle Theme</button>
        <div>Theme : {theme}</div>
      <p>Random Text</p>
    </div>
 )
}

export default App;

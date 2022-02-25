import './App.css';
import {useState} from 'react';

import About from './Components/About';
import Profile from './Components/Profile';
import Home from './Components/Home';


const App = () => {

  const switchTabs = e => {
    setCurrentTab(e.target.name);
  }

  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <div className="App">
      <div>
        <button name="Home" onClick={switchTabs}>Home</button>
        <button name="About" onClick={switchTabs}>About</button>
        <button name="Profile" onClick={switchTabs}>Profile</button>
        <div style={{textAlign: 'center'}}>
          {currentTab === 'Home' ? <Home  /> : currentTab === 'About' ? <About /> : <Profile  />}
        </div>
      </div>
    </div>
  );
}

export default App;

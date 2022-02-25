import './App.css';
import {useState} from 'react';

import {Toast} from './Components/Toast';

const App = () => {

  const [toastState, setToastState] = useState(false);
  const [toastTheme, setToastTheme] = useState('dark');
 return (
   <div className='App'>
     <button className="btn-show" onClick={e => setToastState(true)}>Show Toast</button>
     <select name="toast-theme" onChange={e => setToastTheme(e.target.value)}>
       <option value="dark">Dark</option>
       <option value="light">Light</option>
       <option value="success">Success</option>
       <option value="warning">Warning</option>
       <option value="error">Error</option>
     </select>
     <p>{toastTheme}</p>
     {toastState ? <Toast setToastState={setToastState} theme={toastTheme}/> : null}
   </div>
 )
}

export default App;

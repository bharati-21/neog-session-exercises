import './App.css';
import React, {useState} from 'react';

function App() {
  const [tweet, setTweet] = useState('');
  const [tweets, setTweets] = useState([]);
  
  const [count, setCount] = useState(50);

  const decreaseCounter = event => {
    setTweet(event.target.value);
    setCount(50 - event.target.value.length);
  }

  const postTweet = event => {
    setTweets(prevTweets => [...prevTweets, tweet]);
    setCount(50);
    setTweet("");
  }
 
  return (
    <div className="App">
      <h1>Cheap Twitter Post</h1>
      <textarea value={tweet} onChange={decreaseCounter} className="tweet-box"></textarea>
      <div className={`counter ${count <=10 ? 'error-color' : 'navy-color'}`}>{count}</div>
      <button className='btn-post-tweet' onClick={postTweet} disabled={count<0}>Post Tweet</button>
      <ul>
        {
          tweets.map(tweet => <li>{tweet}</li>)
        }
      </ul>
    </div>
  );
}

export default App;

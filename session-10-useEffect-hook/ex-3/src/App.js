import './App.css';
import React, {useState, useEffect} from 'react';
import uuid from 'react-uuid';

function App() {

  const [wishList, setWishList] = useState([]);
  const [wishListText, setWishListText] = useState("");
  const [wishesSaved, setWishesSaved] = useState(0);

  const handleWishListAdd = e => {
    setWishList(prevWishList => [...prevWishList, {id: uuid(), wishListText}])
  }

  useEffect(() => {
    setWishList(JSON.parse(localStorage.getItem('wishList')));
  }, [])

  useEffect(() => {
    localStorage.setItem('wishList', JSON.stringify(wishList));
    setWishesSaved(prevWishesSaved => prevWishesSaved + 1);
  }, [wishList]);


  
  return (
    <div>
      <input value={wishListText} onChange={e => setWishListText(e.target.value)} />
      <button onClick={handleWishListAdd}>Add Todo</button>
      <div>Wishes saved : {wishesSaved}</div>
      <ul>
        {
          wishList.map(wishListItem => <li key={wishListItem.id}>{wishListItem.wishListText}</li>)
        }
      </ul>
    </div>
  )
}

export default App;

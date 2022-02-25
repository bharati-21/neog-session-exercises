import './App.css';
import {useState} from 'react';
import {nanoid} from 'nanoid';

const App = () => {

  const [items, setItems] = useState([
    {
      id: nanoid(),
      item: 'Apple',
      unitPrice: 200.00,
      quantity: 1,
      price: 200.00,
      outOfStock: false,
    },
    {
      id: nanoid(),
      item: 'Banana',
      unitPrice: 40.00,
      quantity: 1,
      price: 40.00,
      outOfStock: true,
    },
    {
      id: nanoid(),
      item: 'Onion',
      unitPrice: 75.00,
      quantity: 1,
      price: 75.00,
      outOfStock: false,
    },
    {
      id: nanoid(),
      item: 'Potato',
      unitPrice: 50.00,
      quantity: 1,
      price: 50.00,
      outOfStock: true
    },
    {
      id: nanoid(),
      item: 'Milk',
      unitPrice: 50.00,
      quantity: 1,
      price: 50.00,
      outOfStock: false,
    }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (event, item) => {
    if(cartItems.find(cartItem => cartItem.id === item.id)) {
      const selectedCartItem = cartItems.find(cartItem => cartItem.id === item.id);
      
      setCartItems(previousCartItems => [{...selectedCartItem, quantity: selectedCartItem.quantity + 1, price: selectedCartItem.unitPrice * (selectedCartItem.quantity + 1)}, ...previousCartItems.filter(cartItem => cartItem.id !== item.id)])
    }
    else {
      setCartItems(previousCartItems => [item, ...previousCartItems])
    }
  } 

  return (
    <div className="App">
        <table className="item-info" cellPadding="10">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(item => <tr key={item.id} className={`cart-item ${item.outOfStock ? "out-of-stock-item" : "in-stock-item"}`}>
                <td>{item.item}</td>
                <td>Rs. {item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button disabled={item.outOfStock} onClick={e => addItemToCart(e,item)}>Add to cart</button>
                </td>
              </tr>
              )
            }
          </tbody>
        </table>

        <div>
          <h1>Cart Items</h1>

          {
            cartItems.length > 0 ?
              <table className="item-info" cellPadding="10">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                {
                  cartItems.map(cartItem => <tr key={cartItem.id}>
                    <td>{cartItem.item}</td>
                    <td>Rs. {cartItem.price}</td>
                    <td>{cartItem.quantity}</td>
                  </tr>)
                }
                </tbody>
              </table>
            :
            <p>No items in your cart</p>
          }
        </div>

      </div>
  );
}

export default App;

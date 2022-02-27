import React, { useEffect, useState } from "react";
import axios from "axios";
import faker from "faker";

const App = () => {

  const [addresses, setAddresses] = useState([]);
  const [addressText, setAddressText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [addressId, setAddressId] = useState(-1);
  const [showError, setShowError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setShowLoading(true);
      try {
        const response = await axios.get('/api/addresses');
        setAddresses(response.data.addresses);
      }
      catch(error) {
        setShowError(true);
      }
      setShowLoading(false);
    })();
  }, [])

  const handlePostAddress = async e => {
    e.preventDefault();

    if(isEditing) {
      handlePatchAddress();
    }
    else {
      setShowLoading(true);
      setShowError(false);
      try {
        if(addressText !== '') {
          const addressToPost = {
            id: faker.datatype.uuid(), 
            city: addressText
          }
          const res = await axios.post('/api/addresses', {
            address: addressToPost
          });

          const {status} = res;
          if(status >= 200 && status < 300) {
            setAddresses(prevAddresses => [...prevAddresses, addressToPost]);
            setAddressText("");
          }
          else {}
        }    
        else {
          throw new Error("Address cannot be empty")
        }  
      }
      catch(error) {
        setShowError(true);
      }
      setShowLoading(false);
    }
  }

  const handleInputAddress = e => {
    setAddressText(e.target.value);
  }

  const handleEditInputAddress = (e,id) => {
    setIsEditing(true);
    setAddressId(id);
    setAddressText(addresses.find(address => address.id === id).city);
  }

  const handlePatchAddress = async () => {
    setShowLoading(true);
    setShowError(false);
    try {
      if(addressText !== '') {
        const addressToPost = {
          city: addressText
        }
        const {status} = await axios.patch(`/api/addresses/${addressId}`, {
          address: addressToPost
        })

        if(status >= 200 && status < 300) {
          setAddresses(prevAddresses => prevAddresses.reduce((accumulator, currentAddress) => (
              currentAddress.id === addressId ? [...accumulator, {...currentAddress, city: addressText}] : [...accumulator, {...currentAddress}]
              
            ), []));
            setAddressText("");
            setIsEditing(false);
            setAddressId(-1);
          }
        }    
        else {
          throw new Error("Address cannot be empty")
        }  
      }
      catch(error) {
        setShowError(true);
      }
      setShowLoading(false);
    }
  
    const handleDeleteAddress = async (e, id) => {
      setShowLoading(true);
      setShowError(false);
      try {
        const {status} = await axios.delete(`/api/addresses/${id}`);
        
          if(status >= 200 && status < 300) {
            setAddresses(prevAddresses => prevAddresses.filter(prevAddress => prevAddress.id !== id));
            }     
      }
      catch(error) {
          setShowError(true);
      }
      
      setShowLoading(false);
    }

    return (
      <div className="App">
        <h1>Address Management</h1>
        <form className="user-input" onSubmit={handlePostAddress}>
          <label htmlFor="text-address">
            Enter new address
          </label>
          <input type="text" id="text-address" value={addressText} onChange={handleInputAddress}/>
          <button type="submit">{isEditing ? "Edit" : "Save"}</button>
        </form>
        <div>
          {showLoading && <div className="loader">Connecting to the server...</div>}
          {showError && <div className="error">Error occurred while connecting to the server</div>}

          {
            
            addresses.length > 0 ? <div className="addresss-data">
              <h2>Address List</h2>
              <table cellPadding="10">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>City</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                    addresses.map(address => <tr key={address.id}>
                      <td>{address.id}</td>
                      <td>{address.city}</td>
                      <td><button onClick={e => handleEditInputAddress(e,address.id)}>Edit</button></td>
                      <td><button onClick={e => handleDeleteAddress(e,address.id)}>Delete</button></td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
            :
            <div className="no-data-message">No Data Found</div>
          }
        </div>
      </div>
    )
}

export default App;
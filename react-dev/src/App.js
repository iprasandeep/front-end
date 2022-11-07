import './App.css';
import React from 'react';
import User from './User'

function App()
{
  const users = [
    {
      name: "Prasandeep", email: "deep@gmail.com", contact:"111"
    },
    {
      name: "Bruce", email: "bruce@gmail.com", contact:"322"
    },
    {
      name: "Warner", email: "warner@gmail.com", contact:"545"
    },

  ]
 return (
  <div className='App'>
    <h1> Reuse Component with List</h1>
   
    {
      users.map((item, i)=>
      < User data={item} />
      )
    }
   
  </div>
  
 )
};
export default App;

// import React from 'react';
import React, {useState} from 'react';
import './App.css';
import Profile from './Profile';
import User from './User';

function App()
{
  function getData()
  {
    alert("hello from app");
  }
  return (
    <div className='App'>
      <User data={getData} />
    </div>
  )
}

export default App;
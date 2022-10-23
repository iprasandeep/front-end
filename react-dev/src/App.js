// import React from 'react';
import React, {useState} from 'react';
import './App.css';
import Student from './Student';


function App()
{
  return (
 <div className="App">
  <h1>Handle Forms in React</h1>
  <form>
    <input type="text" placeholder='enter name' /><br />
    <select>
      <option>Select Options</option>
      <option > Marvel</option>
      <option > DC Comics</option>
    </select>
    <br></br>
    <input type="checkbox" /><span>Accept terms and Conditions</span>
  </form>
 </div>
  )
}
export default App;

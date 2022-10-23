import React from 'react';
import './App.css';
import User from './User'


function App()
{
  const [name, setName]=React.useState("Prasandeep")
  return (
    <div className='App'>
      <h1>Render Method in React</h1>
      <User/>
      {/* <button >Update Name</button> */}
    </div>
  );
}
export default App;
import './App.css';
import React, {useState, use} from 'react';

function App()
{
  
  const [data, setData] = useState("Prasandeep")
  return(
    <div className='App' >
      <h1>{ data } </h1>
      <button onClick={()=> setData("Gautam")} > Update Data </button>
    </div>
  )
}
export default App;
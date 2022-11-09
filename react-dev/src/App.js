import './App.css';
import React, { useEffect, useState } from 'react' ;

function App()
{
  const [data, setData] = useState([])
  useEffect(() =>{

  fetch("https://jsonplaceholder.typicode.com/todos")
  .then((result)=>{
    result.json().then((res)=>{
      // console.warn("result: ", res);
      setData(res)
    })
  })
  }, [])
  console.warn(data)
  return (
  <div className="App">
    <h1>Get API Call</h1>
    <table border="1">
      <tr>
        <td>USER ID</td>
        <td>ID</td>
        <td>TITLE</td>
        <td>COMPLETED</td>
      </tr>
      {
        data.map((item)=> 
        <tr>
        <td>{item.userId}</td>
        <td>{item.id}</td>
        <td>{item.title} </td>
        <td>{item.completed}</td>
      </tr>
        )
      }
    </table>
  </div>

  );
}

export default App;
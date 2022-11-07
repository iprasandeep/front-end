import './App.css';

import React, {useRef} from 'react';
function App()
{
  let inputRef = useRef(null)
  function handleInput()
  {
    console.warn("function testing")
    inputRef.current.value = "1000";
    inputRef.current.focus();
    inputRef.current.style.display="none";
  }
  return (
    <div className='App'>
      <h2>useRef in React</h2>
      <input type='text' ref = {inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}
export default App;
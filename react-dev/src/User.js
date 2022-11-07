import React, {forwardRef} from 'react';


function User(props, ref)
{
  return (
    <div>
      <h2>Input Something: </h2>
      <input type="text" ref ={ref}/>
    </div>
  )
}

export default forwardRef(User);
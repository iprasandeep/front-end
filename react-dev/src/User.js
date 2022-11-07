import React from 'react';

function User(props)
{
 const data = "Prasandeep Gautam"
  return  (
    <>
      <h2>User Name: </h2>
      <button onClick={()=>props.alert(data)}>Click Me</button> 
    </>
  )
}
export default User;
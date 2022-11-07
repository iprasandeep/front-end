import React from 'react'
import './App.css';
function User(props)
{
  return (
    <div>
      <span>{props.data.name}</span>
      <span>{props.data.mail}</span>
      <span>{props.data.contact}</span>
      <button>Hello{props.data.address}</button>
    </div>
    
  )
}
export default User;
import './App.css';
import React, {PureComponent} from 'react';
class User extends PureComponent {

  render()
  {
    console.warn("User Component check re-rendering")
    return (
      <div className='App'>
        <h1>User Component: {this.props.count}</h1>
        
      
      </div>
    );
  }
}

export default User;
import React from 'react';


class App extends React.Component {

constructor()
{
  super();
  this.state={
    name: "Prasandeep"
  }
}
componentDidMount()
{
  console.warn("componentDidMount");
}
render()
{
  console.warn("render")
  return (
    <div className='App'>
      <h1>Component Did Mount</h1>
      <button  onClick={()=>{this.setState({name: "Deep"})}}>Update Name</button>
    </div>
    );
  }
}

export default App;
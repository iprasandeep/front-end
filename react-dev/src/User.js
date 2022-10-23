import React from 'react';
class User extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"pd@gmail.com"
        }
    }
    render()
    {
        console.warn("Render method", this.state.email);
        return (
            <div>
                 <h1>User Component {this.props.name}</h1>
                <button  onClick={()=>this.setState({email: "deep@gmail.com"})}>Email Update</button>
            </div>
        )
    }
}
export default User;
import {NavLink} from 'react-router-dom'
import react from 'react';

export const Navbar = () =>{
    const navLinkStyles = ({ isActive}) =>{
        return {
            fontWeight: isActive? 'bold': 'normal',
            TextDecoration: isActive? 'none': 'underline'
        }
    }
    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>

        </nav>
    )
}
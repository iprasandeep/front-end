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
        <nav className='primary-nav'> 
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
        </nav>
    )
}
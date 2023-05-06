import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const Nav = styled.nav`
    .navbar-list{
        display: flex;
        gap: 5rem;

        li{
            list-style: none;
            .navbar-link{
                text-decoration: none;
                font-size: 1.5rem;
                color: #000000;
                font-family: "Lucida Console", "Courier New", monospace;
                &:hover,
                &:active{
                    color: #4C007A;
                }
            }
        }
        
    }
    `;
    return (
        <Nav>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink className='navbar-link' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/career">Career</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='navbar-link' to="/signIn">SignIn</NavLink>
                    </li>
                </ul>
            </div>
        </Nav>
    );
}

export default Navbar;
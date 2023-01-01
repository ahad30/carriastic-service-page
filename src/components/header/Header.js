import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src='././images/logo.png' alt='logo' className='logo' />
            </NavLink>
            <Navbar />
        </MainHeader>
    );
}

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    height: 60px;
    display: flex;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    justify-content: space-between;
    align-items: center;

    .logo{
        height: 5rem;
        width: 13.75rem;
    }
`;
export default Header;
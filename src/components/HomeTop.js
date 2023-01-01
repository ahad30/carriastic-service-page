import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Button } from "../styles/Button";

const HomeTop = () => {
    return <Wrapper>
        <div className="container grid grid-two-column">
            <div className="section-top-data">
                <h1 className="top-heading">Want to Build Your Career?</h1>

            </div>
            <Button className="btn-contact">
                <NavLink to="/contact">Contact Us</NavLink>
            </Button>

            <div className="section-top-image">
                <picture>
                    <img src='./images/slider1.png' alt='topPic' className='topPic' />
                </picture>
            </div>

        </div>
    </Wrapper>
};

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-top-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 2.5rem;
        margin-left:5rem;
    }

    .btn-contact{
        margin-top:2rem;
        margin-left:20rem;
    }
    picture{
        align: right;
    }
    .section-top-image{
        margin-left: 80rem;
        max-width: 100%;
    }
    
    
`;

export default HomeTop;
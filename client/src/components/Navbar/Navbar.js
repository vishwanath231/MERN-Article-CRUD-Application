import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import Logos from '../../image/logo.png';


const Navbar = () => {
    return (
        <>
            <NavContainer className="nav">
                <div className="navbar">
                    <Logo className="logo">
                        <img src={Logos} alt="" />
                    </Logo>
                    <MenuList>
                        <li>
                            <NavLink to="/" exact activeClassName="active" className="link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/new" activeClassName="active"  className="link">New Article</NavLink>
                        </li>
                    </MenuList>
                </div>
            </NavContainer>   
        </>
    )
}

export default Navbar;


const NavContainer = styled.nav `
    background: #eee;
    padding: 5px 0;

    .navbar{
        max-width: 1140px;
        margin: 0 auto;
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Logo = styled.div `
    img {
        width:120px;
        object-fit: contain;
    }
`;

const MenuList = styled.div `
    display: flex;
    list-style: none;

    li{
        margin-left: 1.5rem;

        .link{
            text-decoration: none;
            color: #000;
            font-size: 1rem;
            font-weight: 500;
        }

        .active{
            color: #fff;
            background: #EE2635;
            padding: 8px 15px;
            border-radius: 3px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
    }
`;


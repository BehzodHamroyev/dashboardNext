import React from 'react';
import {FaBars} from 'react-icons/fa'
import {  useSelector } from 'react-redux';
import styled from 'styled-components'
import clickSidbar from '../../Redux/Action/clickSidbar';
const NavbarWrapper = styled.div`
&{
    display:  flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height:80px;
    top:0;
    position: sticky;
    background-color: white;
    z-index:1000;
    .logo{
        width:70px;
    }
    button.btn{
        z-index:2000;
    }
}
`
const Navbar = () => {
    const sidebar = useSelector((state) => state.sidebar);
    const showSidebar = () => {
        clickSidbar();
    }
    return (
        <NavbarWrapper className="d-flex justify-content-between  shadow px-5 align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" className="logo" alt="" />
            <button onClick={showSidebar} className="btn  btn-success">
                <FaBars/>
            </button>
        </NavbarWrapper>
    );
};

export default Navbar;
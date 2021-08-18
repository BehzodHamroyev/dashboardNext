import React from 'react';
import Link from 'next/link'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaHome, FaImage, FaImages, FaListUl, FaMailBulk, FaUsers } from 'react-icons/fa';
import { useRouter } from 'next/dist/client/router';
const dataDashboard = [
    { to: '/', title: 'Home', icon: <FaHome /> },
    { to: '/Posts', title: 'Posts', icon: <FaMailBulk /> },
    { to: '/Albums', title: 'Albums', icon: <FaImages /> },
    { to: '/Photos', title: 'Photos', icon: <FaImage /> },
    { to: '/Todos', title: 'Todos', icon: <FaListUl /> },
    { to: '/Users', title: 'Users', icon: <FaUsers /> },
];
const SideBarWrapper = styled.div`
  & {
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888 !important;
      border-radius: 5px !important;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555 !important;
    }
    background-color: #94929281;
    width: 300px;
    min-height: 100vh;
    overflow-y: auto;
    position: sticky;
    top: 0;
    z-index: 3000 !important;
    transition: all 1s linear;
    .active {
      background-color: #919eab6f;
      color: #00ab55 !important;
    }
    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin:0;
      padding:0;
      .link {
        width: 250px;
        padding: 10px 40px;
        border-radius: 10px;
        text-align: center;
        margin-top: 40px;
        list-style: none !important;
        width: 100%;
        font-size: 20px;
        transition: all 0.2s linear;
        &:hover {
          background-color: #85888b8d;
          color: #ffffff !important;
        }
      }
    }
    .user {
      width: 600px;
      height: 30px;
      img.logo {
        width: 50px !important;
        border-radius: 50%;
      }
      .userName {
        color: #33c096;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    & {
      display: ${(props) => {
        return (props.sidebar && 'block') || 'none';
    }};
      position: fixed;
      min-height: 120vh;
      background-color: #e9e5e5dc;
      top: 80px;
      transition: all linear 3s;
      z-index: 2000 !important;
    }
  }
`;
const SideBar = () => {
    const router = useRouter()
    const sidebar = useSelector(state => state.globalReducer.isSidebarShow)
    return sidebar && <SideBarWrapper sidebar={sidebar} className="shadow">
        <div className="user d-flex container mt-5 ms-3 align-items-center">
            <img src="https://github.com/BehzodHamroyev/hbdashboard/blob/main/src/Components/SideBar/user.jpg?raw=true" className="logo d-block me-3" alt="" />
            <h5 className="userName">Hamroyev Behzod</h5>
        </div>
        <ul className="menu d-flex justify-content-center">
            {
                dataDashboard.map((v, i) =>
                    <li key={i
                    } className={`link ${router.pathname === v.to && "active" || ""}`} >
                        <Link href={v.to} >
                            <div className={`  d-flex justify-content-center align-items-center`}><span className="d-block fs-2 me-3">{v.icon} </span>   <a >{v.title}</a></div>
                        </Link>
                    </li>
                )
            }
        </ul>
    </SideBarWrapper> || ""


};

export default SideBar;

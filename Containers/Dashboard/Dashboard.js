import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/SideBar/Sidebar'
const DashboardWrapper = styled.div`
&{
    display: flex;
    .right{
        flex: 1;
    }
}
`
const Dashboard = (props) => {
    return (
        <DashboardWrapper >
            <div className="sidebar"><Sidebar /></div>
            <div className="right">
                <Navbar />
                <div>{props.children}</div>
            </div>
        </DashboardWrapper>
    )
}

export default Dashboard

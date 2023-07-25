import React from 'react'
import '../../userRegistry/Dashboard/dashboard.css';
import AppHeader from '../../AppHeader';
import { Space } from 'antd';
import SideMenu from '../../SideMenu';
import PageContents from '../../PageContents';
import AppFooter from '../../AppFooter';




function Dashboard(){

    return(
        <div className='App'>
            <AppHeader></AppHeader>
            <Space className='SideMenuAndPageContents'>
                <SideMenu></SideMenu>
                <PageContents></PageContents>
            </Space>
            <AppFooter></AppFooter>
        </div>
    )
}
export default Dashboard;
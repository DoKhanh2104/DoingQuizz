import React, { useState } from 'react'
import SideBar from './SideBar'
import './Admin.scss'
import { FaBars } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false)

    const handleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className='admin-container'>
            <div className='admin-sidebar'>
                <SideBar collapsed={collapsed}></SideBar>
            </div>

            <div className='admin-content'>
                <div className='admin-header'>
                    <FaBars onClick={() => handleCollapsed()}></FaBars>


                </div>

                <div className='admin-main'>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    )
}

export default Admin
import React, { useState } from 'react'
import SideBar from './SideBar'
import './Admin.scss'
import { FaBars } from 'react-icons/fa'

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
                <FaBars onClick={() => handleCollapsed()}></FaBars>
                Contents
            </div>
        </div>
    )
}

export default Admin
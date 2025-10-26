import './Admin.scss'
import 'react-pro-sidebar/dist/css/styles.css';
import { BiDizzy } from "react-icons/bi";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import sidebarBg from '../../assets/bg2.jpg'

import { FaTachometerAlt, FaGem, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <BiDizzy size={'2.5em'} color='rgb(1, 255, 255)' />
                        <span style={{ margin: 20, color: 'rgb(1, 255, 255)' }}>Devi The Dev</span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<FaTachometerAlt />}
                        // suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to={"/admins"} />
                        </MenuItem>
                        {/* <MenuItem icon={<FaGem />}> components </MenuItem> */}
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            icon={<FaGem />}
                            title={"Features"}
                        >
                            <MenuItem>
                                Quản lý User
                                <Link to={"/admins/manage-users"} />
                            </MenuItem>
                            <MenuItem> Quản lý bài quizz</MenuItem>
                            <MenuItem> Quản lý câu hỏi</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <span
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            <FaHeart />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Devi The Dev
                            </span>
                        </span>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>

    )
}

export default SideBar
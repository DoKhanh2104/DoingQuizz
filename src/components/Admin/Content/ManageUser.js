import React from 'react'
import { useState } from 'react';
import ModalCreateUser from './ModalCreateUser'
import './ManageUser.scss'
import { FaPlus } from "react-icons/fa";
import TableUser from './TableUser';

const ManageUser = () => {

    const [showModal, setShowModal] = useState(false)
    const hadleShowModal = () => {
        setShowModal(!showModal)
    }
    return (
        <div className='manage-user-container'>
            <div className='title'>Manage User</div>

            <div className='users-content'>
                <div className="btn-add-new ">
                    <button onClick={() => hadleShowModal()} className="btn btn-primary"><FaPlus /> Add new users</button>
                </div>
                <div>
                    <TableUser />
                </div>
                <ModalCreateUser show={showModal} setShow={setShowModal} />
            </div>
        </div>


    )
}

export default ManageUser
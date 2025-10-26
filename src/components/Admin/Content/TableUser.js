
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getAllUser } from '../../../services/apiService';

const TableUser = () => {

    const [listUser, setListUser] = useState([])

    useEffect(() => {
        fetchListUser();
    }, []);

    const fetchListUser = async () => {
        let res = await getAllUser()
        if (res.EC === 0) {
            setListUser(res.DT)
        }
    }


    return (
        <>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 ?
                        (listUser.map((user, index) =>
                        (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className='btn btn-secondary'>View</button>
                                <button className='btn btn-warning mx-3'>Update</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>)
                        )) : (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )
                    }


                </tbody>

            </Table>
        </>
    );
}

export default TableUser;
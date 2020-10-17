import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AdminServiceList.css'
const AdminServiceList = () => {
    const [getUserService, setGetUserService] = useState([])

    useEffect(() => {

        fetch('https://mighty-inlet-60591.herokuapp.com/getUserService')
            .then(res => res.json())
            .then(data => {
                setGetUserService(data)
            })
    }, [])

    return (
        <section className="container">
            <div className="row col-sm-12">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="table-main">


                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className="text-secondary text-left" scope="col">Sr No</th>
                                    <th className="text-secondary" scope="col"> Service Name</th>
                                    <th className="text-secondary" scope="col">Name</th>
                                    <th className="text-secondary" scope="col">Price</th>
                                    <th className="text-secondary" scope="col">Date</th>

                                    <th className="text-secondary" scope="col">Email</th>
                                    <th className="text-secondary" scope="col">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getUserService.map((appointment, index) =>

                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{appointment.name}</td>
                                            <td>{appointment.client}</td>
                                            <td> $ {appointment.price}</td>
                                            <td>{appointment.created}</td>

                                            <td>{appointment.email}</td>
                                            <td class="dropdown">
                                                <form action="">
                                                    <select >
                                                        <option style={{ color: 'red' }} value="Pending">Pending</option>
                                                        <option style={{ color: 'green' }} value="Done">Done</option>
                                                        <option style={{ color: 'yellow' }} value="Ongoing">Ongoing</option>

                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;
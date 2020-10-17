import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import './UserServiceList.css'
const UserServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userService, setUserService] = useState([])



    useEffect(() => {
        fetch('https://mighty-inlet-60591.herokuapp.com/singleUserServices?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setUserService(data)
            })

    }, []);


    console.log(userService)

    return (
        <section className="container">
            <div className="row col-sm-12">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <div className="table-main">
                        <h2 style={{ textAlign: 'center' }}>your services here</h2>


                        {
                            userService.map(user => <li> name: {user.client} email: {user.email} service : {user.name}  </li>)
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserServiceList;
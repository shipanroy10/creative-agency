import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AddIcon from '@material-ui/icons/Add';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewListIcon from '@material-ui/icons/ViewList';
import { UserContext } from '../../../App';
const Sidebar = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div  >
            <ul>
                <li>
                    <Link to="/order" >
                        <ShoppingCartIcon style={{ color: 'black' }} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" >
                        <ViewListIcon style={{ color: 'black' }} />    <span>ServiceList</span>
                    </Link>
                </li>

                <li>
                    <Link to="/review" >
                        <TextsmsIcon style={{ color: 'black' }} />     <span>Review</span>
                    </Link>
                </li>

                {
                    isAdmin && <div>
                        <li>
                            <Link to="/adminServiceList" >
                                <ViewListIcon style={{ color: 'black' }} />    <span>ServiceList</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/addServices" >
                                <AddIcon style={{ color: 'black' }} />      <span>Add service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" >
                                <GroupAddIcon style={{ color: 'black' }} />    <span>Make Admin</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/"  >
                                <SettingsIcon style={{ color: 'black' }} />   <span>Settings</span>
                            </Link>
                        </li>


                    </div>
                }





            </ul>
            <div>
                <Link to="/" > <ExitToAppIcon style={{ color: 'black' }} /> <span>Logout</span></Link>

            </div>
        </div>
    );
};

export default Sidebar;
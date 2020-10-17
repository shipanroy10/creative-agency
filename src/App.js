import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Order from './components/Home/DashBoard/Order/Order';
import Sidebar from './components/Home/Sidebar/Sidebar';
import PrivateRoute from './components/Home/Login/PrivateRoute';
import Review from './components/Home/DashBoard/Review/Review';
import AddServices from './components/Home/DashBoard/AddServices/AddServices';
import MakeAdmin from './components/Home/DashBoard/MakeAdmin/MakeAdmin';
import UserServiceList from './components/Home/DashBoard/UserServiceList/UserServiceList';
import AdminServiceList from './components/Home/DashBoard/AdminServiceList/AdminServiceList';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/order/:name">
            <Order></Order>
          </PrivateRoute>

          <Route path="/sidebar">
            <Sidebar></Sidebar>
          </Route>
          <Route path="/serviceList">
            <UserServiceList></UserServiceList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/addServices">
            <AddServices></AddServices>
          </PrivateRoute>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/adminServiceList">
            <AdminServiceList></AdminServiceList>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;

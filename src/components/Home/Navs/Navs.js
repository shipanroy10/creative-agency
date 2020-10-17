import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../creative-agency-main/images/logos/logo.png'
const Navs = () => {
  return (

    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="#"><img style={{ width: '100px', height: '50px' }} src={logo} alt="" /></a>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">OurTeam</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">Contact Us</a>
            </li>
          </ul>
          <Link to="/addServices">    <button className="btn btn-dark">Login</button>   </Link>
        </div>
      </nav>
    </div>

  );
};

export default Navs;
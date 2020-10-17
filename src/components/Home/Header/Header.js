import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navs from '../Navs/Navs';
import Allpng from '../Allpng/Allpng';
import Services from '../Services/Services';
import MainSlide from '../MainSlide/MainSlide';
import UserFeedback from '../UserFeedback/UserFeedback';
import AllFooter from '../AllFooter/AllFooter';





const Header = () => {
  return (
    <div className="header-container">
      <Navs></Navs>

      <HeaderMain></HeaderMain>
      <Allpng></Allpng>
      <Services></Services>
      <MainSlide></MainSlide>
      <UserFeedback></UserFeedback>
      <AllFooter></AllFooter>
    </div>
  );
};

export default Header;
import React, { Fragment } from 'react';
import {Outlet,Link} from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as HomeLogo} from "../assets/house-solid.svg"

const Navigation = () => {
 return (
    <Fragment>
     <div className='navigation'>
      <div>
       <Link className='logo-container' to="/">
        <div><HomeLogo/></div>
       </Link>
      </div>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
           Shop
          </Link>
       <Link className='nav-link' to="/auth">Sign In</Link>
      </div>
     </div>   
     <Outlet/>
    </Fragment>
  );
}

export default Navigation
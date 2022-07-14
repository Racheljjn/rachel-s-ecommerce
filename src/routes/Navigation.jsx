import React, { Fragment,useContext } from 'react';
import {Outlet,Link} from "react-router-dom";
import "./navigation.styles.scss";
import {ReactComponent as HomeLogo} from "../assets/house-solid.svg";
import { UserContext } from '../contexts/user.context';
import { signOutUser } from '../utils/firebase/firebase';

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const signOutHandler=async()=>{
     await signOutUser()

  }
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
       {currentUser ? 
       <span className='nav-link' onClick={signOutHandler}>Sign out</span>
       :<Link className='nav-link' to="/auth">Sign In</Link>}
      </div>
     </div>   
     <Outlet/>
    </Fragment>
  );
}

export default Navigation
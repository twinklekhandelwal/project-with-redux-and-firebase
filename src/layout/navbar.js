import React from 'react';
import Sign from './singedin';
import Signout from './singedout'
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
<nav className="nav-wrapper grey darken-3">
    <div className="container">
       <Link to="/" className="brand-logo">Logo</Link>
       <Sign/>
       <Signout/>
      
    </div>
  </nav>
    )
}
export default Navbar;
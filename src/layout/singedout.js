import React from 'react';
import { Link } from "react-router-dom";
const Signout=()=>{
    return(
      <ul id="nav-mobile" className="right ">
        <li><Link to="/Signin" >signin</Link></li>
        <li><Link to="/Signup" >singup</Link></li>
         
      </ul>
    )
}
export default Signout;
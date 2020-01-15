import React from 'react';
import { Link } from "react-router-dom";
const Sign=()=>{
    return(
      <ul id="nav-mobile" className="right ">
        <li><Link to="/" >project</Link></li>
        <li><Link to="/" >Log out</Link></li>
         <li><Link to="/" ></Link></li> 
        <li className="btn-floating btn-large waves-effect waves-light blue">NN</li>
        
      </ul>
    )
}
export default Sign;
import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
   return (
      <nav>
         <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo">
               <i className={"tiny material-icons"}>directions_bike</i>
               Ride reminder
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/login">Login</Link>
               </li>
               <li>
                  <Link to="/register">Register</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavMenu.module.css";



export default function NavMenu() {
  return (
    <div className = {classes.nav} >
      <ul>
        <li>
          <NavLink to ="/" >HOME PAGE</NavLink>
        </li>
        <li>
          <NavLink to ="/Profile">PROFILE PAGE</NavLink>
        </li>
         {/* <li>
            <NavLink to ="/Resume">ONE MORE PAGE</NavLink>
        </li> */}
        <li>
            <NavLink to ="/Login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

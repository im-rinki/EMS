import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Navigate, NavLink} from "react-router-dom";
import images from "./images.png";
import "../App.css";
function Header() {
  return (
    <>
{/* <div classNameName='navbar'>
    <ul>
      <li>
    <NavLink to="/home">Home</NavLink>
    </li>
    <li>
    <NavLink to="/about">About</NavLink>
    </li>
    <li>
    <NavLink to="/contact">Contact</NavLink>
    </li>
    </ul>
</div> */}

<nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#0C0032"}}>
  {/* <a className="navbar-brand" href="#" id="navlinkstylehome">EMS Application</a> */}
<img src={images} style={{width:"70px", borderRadius:"20px",marginLeft:"10px"}}></img>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav " style={{marginLeft:"65%"}}>
    <ul className="navbar-nav ">
        <li className="nav-item active">
         <NavLink className="nav-link" to="/"  id="navlinkstylehome">LogIn</NavLink>
      </li>
      <li className="nav-item active">
         <NavLink className="nav-link" to="/signup"  id="navlinkstylehome">SignUp</NavLink>
      </li>
      <li className="nav-item active">
       <NavLink className="nav-link" to="/home"  id="navlinkstylehome">Home</NavLink>
      </li>
      <li className="nav-item">
         <NavLink className="nav-link" to="/fillemployeedetails"  id="navlinkstylehome">FillEmployeeDetails</NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/contact"  id="navlinkstylehome">Contact</NavLink>
      </li>
     
    </ul>
  </div>
  
</nav>
    </>
  )
}

export default Header
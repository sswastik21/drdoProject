
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import drdo from "./Images/drdoLogo.png"
import "./Navbar.css"

 const Navbar=()=>{
  return (
    <div>
    <div class="topnav" id="myTopnav">
    <img src={drdo} alt="" class="logo" />
    <a href="#home" >Home</a>
    <a href="#news">About</a>
    <a href="#contact">Search</a>
    <a href="#about">Sign In/Up</a>
    <a href="#about">Dashboard</a>
    <a href="javascript:void(0);" class="icon">
    <GiHamburgerMenu class="fa fa-bars" onClick={()=>{
      //alert('huoi');
      var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
    }}/>
    </a>
  </div>
  </div>
  );
 }
 export default Navbar;
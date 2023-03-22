import React from 'react';
import Logo from "../Image/logo192.png";
import "./navbar.css"

function Navbar() {
  return (
    <nav className='nav'>
        <img src={Logo} alt="" width="40px"/>
        <h1 className='nav-top'>ReactFacts</h1>
        <h2>React Course - Project 1</h2>
    </nav>
  )
}

export default Navbar
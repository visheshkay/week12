import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">22071A0531</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <NavLink className="nav-link" to="">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="login">Login</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="register">Register</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Navbar

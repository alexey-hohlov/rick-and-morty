import React from "react";
import { Link } from "react-router-dom";
import { logo } from '../assets/images'
export default function Navbar(){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand">
                    <img src={logo} alt="" width="130" height="40"></img>
                </div>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                    <li className="nav-item">
                        <Link className="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/characters"}>Characters</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/locations"}>Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/episodes"}>Episodes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import logo from '../assets/logo.png';  // Updated path

const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Optional: Add any useEffect logic related to location changes
    }, [location]);

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" height="40" style={{ padding: '-2px', margin: '-2px' }} />
                </Link>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/services" ? "active" : ""}`} to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="form-inline my-2 my-lg-0">
                    {!localStorage.getItem('token') ?
                        <>
                            <Link className="btn btn-outline-light mr-2" to="/login">Login</Link>
                            <Link className="btn btn-outline-light" to="/signup">SignUp</Link>
                        </>
                        :
                        <button onClick={logout} className="btn btn-outline-light">Logout</button>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;

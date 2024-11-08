import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <header>
            <div className="logo"><img src="http://localhost:3000/images/PPI2.png" alt="navbarDashboard" /></div>
            <div className="links">
                <i className="fa-solid fa-share"></i>
                <Link to={"/dashboard"}>Dashboard</Link>
            </div>
        </header>
    );
};



export default Navbar;


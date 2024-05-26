import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    return (
        <header>
            <div className="logo"><img src="http://localhost:3000/images/PPI2.png" alt="navbarDashboard" /></div>
            <div className="links">
                <Link to={"/"}>About Us</Link>
                <Link to={"/Contact"}>Contact</Link>
                <Link to={"/EmploiTemps"}>Groupes</Link>
                <Link to={"/Login"}>Login</Link>
            </div>
        </header>
    )

}

export default Navbar2

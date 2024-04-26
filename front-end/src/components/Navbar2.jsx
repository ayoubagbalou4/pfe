import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    return (
        <header>
            <div className="logo"><img src="http://localhost:3000/images/logo4.png" alt="navbarDashboard" /></div>
            <div className="links">
                <Link to={"/About"}>About Us</Link>
                <Link to={"/Contact"}>Contact</Link>
                <Link to={"/EmploiTemps"}>Groupes</Link>
            </div>
        </header>
    )

}

export default Navbar2

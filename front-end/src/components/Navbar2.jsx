import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

    return (
        <header>
            <div className="logo"><img src="http://localhost:3000/images/logo4.png" alt="navbarDashboard" /></div>
            <div className="links">
                <Link to={"/"}>À Propos de Nous</Link>
                <Link to={"/Contact"}>Contact</Link>
                <Link to={"/EmploiTemps"}> Emploi Des Groupes</Link>
                <Link to={"/Login"}>Se Connecter</Link>
            </div>
        </header>
    )

}

export default Navbar2

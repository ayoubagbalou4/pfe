import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Layout = (props) => {
    const [showAffectation, setshowAffectation] = useState(false);
    const [showFormateur, setshowFormateur] = useState(false);
    const [showGroupe, setshowGroupe] = useState(false);
    const [showStatistiques, setshowStatistiques] = useState(false);
    const [showRealisation, setshowRealisation] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [admin, setAdmin] = useState(localStorage.getItem('admin'));
    const navigate = useNavigate()

    useEffect(() => {
        if (!admin) {
            navigate('/Login')
        }
    }, [])

    if (!admin) {
        return null
    }



    const toggleMenu1 = () => {
        setshowAffectation(!showAffectation);
    };
    const toggleMenu2 = () => {
        setshowFormateur(!showFormateur);
    };
    const toggleMenu3 = () => {
        setshowStatistiques(!showStatistiques);
    };
    const toggleMenu4 = () => {
        setshowRealisation(!showRealisation);
    };
    const handleLogout=()=>{
        Swal.fire({
            title: "Êtes-vous sûr(e) de vouloir vous déconnecter ?",
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, me déconnecter"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('admin')
                navigate('/Login')
            }
        });
    }

    return (
        <div class="containerDahboard">
            <div class="aside">
                <div class="brand"><img src="http://localhost:3000/images/logo4.png" alt="" /></div>
                <div className="linksSide">
                    <Link to="/Dashboard"><i className="fa-solid fa-house-chimney"></i> Dashboard </Link>
                    <a onClick={toggleMenu1}><i className="fa-solid fa-user"></i>Suivi Pédagogique</a>
                    {
                        showAffectation &&
                        <>
                            <Link className='linksDown' to="/suivi/affectation/groupe">Groupe</Link>
                            <Link className='linksDown' to="/suivi/affectation/groupeModule">Groupe par Module</Link>
                            <Link className='linksDown' to="/suivi/affectation/formateur">Formateur</Link>
                            <Link className='linksDown' to="/suivi/affectation/nonAffecte">Non Affecté</Link>
                            <Link className='linksDown' to="/suivi/affectation/MH-aff-Formateur">MH-aff-Formateur</Link>
                        </>
                    }
                    <a onClick={toggleMenu2}><i className="fa-solid fa-users"></i>Formateur</a>
                    {
                        showFormateur &&
                        <>
                            <Link className='linksDown' to="/formateurs/AjouterFourmateur">Ajouter Formateur</Link>
                            <Link className='linksDown' to="/formateurs">Afficher Formateurs</Link>
                        </>
                    }
                    <a onClick={toggleMenu3}><i className="fa-solid fa-chart-simple"></i> Statistiques</a>
                    {
                        showStatistiques &&
                        <>
                            <Link className='linksDown' to="/StatistiquesFormateur">Statistiques Formateur</Link>
                            <Link className='linksDown' to="/StatistiquesGroupe">Statistiques Groupe</Link>

                        </>
                    }
                    <a onClick={toggleMenu4}><i className="fa-solid fa-circle-check"></i>RealisationFormateur</a>
                    {
                        showRealisation &&
                        <>
                            <Link className='linksDown' to="/suivi/Realisation-Formateur-ParSemaine"> Realisation Formateur ParSemaine</Link>
                            <Link className='linksDown' to="/suivi/RealisationFormateur">Realisation Formateur</Link>

                        </>
                    }
                    <Link to="/suivi/ApTotaleGroupe"><i className="fa-solid fa-users-rectangle"></i> Ap Totale Groupe</Link>
                    <Link to="/suivi/AvancementProgramme"><i className="fa-solid fa-calendar-check"></i> Avancement Programme</Link>
                    <Link to="/OcupationSalle"><i className="fa-solid fa-house-laptop"></i> Ocupation Salle</Link>
                    <Link to="/Absences"><i className="fa-solid fa-user-xmark"></i> Absences </Link>
                </div>
            </div>
            <div class="main">
                <nav>
                    <div class="header">Header</div>
                    <div onClick={()=>setShowMenu(!showMenu)} class="logout">
                        <img src="http://localhost:3000/images/provile_empty.png" alt="" />
                    </div>
                </nav>
                {showMenu &&
                <div class="menuClick">
                    <a onClick={handleLogout}><i class="fa-solid fa-power-off"></i> Déconnecter</a>
                </div>}
                {props.content}
            </div>
        </div>
    )
}

export default Layout

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
    const [showSemaine, setshowSemaine] = useState(false);
    const [showAfectation1,setshowAffectation1] = useState(false)
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
    const toggleMenu5 = () => {
        setshowSemaine(!showSemaine);
    };
    const toggleMenu6 = () => {
        setshowAffectation1(!showAfectation1);
    };
    const handleLogout = () => {
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
                    <Link className={props.Dashboard} to="/Dashboard"><i className="fa-solid fa-house-chimney"></i> Dashboard </Link>
                    <a className={props.SuiviPédagogique} onClick={toggleMenu1}><i className="fa-solid fa-user"></i> Suivi Pédagogique {!showAffectation ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showAffectation &&
                        <>
                            <Link to="/suivi/affectation/groupe"><i class="fa-solid fa-chevron-right"></i>Groupe</Link>
                            <Link to="/suivi/affectation/groupeModule"><i class="fa-solid fa-chevron-right"></i>Groupe par Module</Link>
                            <Link to="/suivi/affectation/formateur"><i class="fa-solid fa-chevron-right"></i>Formateur</Link>
                            <Link to="/suivi/affectation/nonAffecte"><i class="fa-solid fa-chevron-right"></i>Non Affecté</Link>
                            <Link to="/suivi/affectation/MH-aff-Formateur"><i class="fa-solid fa-chevron-right"></i>MH-aff-Formateur</Link>
                        </>
                    }
                    <a className={props.Formateur} onClick={toggleMenu2}><i className="fa-solid fa-users"></i>Formateur {!showFormateur ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showFormateur &&
                        <>
                            <Link to="/formateurs/AjouterFourmateur"><i class="fa-solid fa-chevron-right"></i>Ajouter Formateur</Link>
                            <Link to="/formateurs"><i class="fa-solid fa-chevron-right"></i>Afficher Formateurs</Link>
                        </>
                    }
                    <a className={props.Statistiques} onClick={toggleMenu3}><i className="fa-solid fa-chart-simple"></i> Statistiques {!showStatistiques ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showStatistiques &&
                        <>
                            <Link to="/StatistiquesFormateur"><i class="fa-solid fa-chevron-right"></i>Statistiques Formateur</Link>
                            <Link to="/StatistiquesGroupe"><i class="fa-solid fa-chevron-right"></i>Statistiques Groupe</Link>

                        </>
                    }
                    <a className={props.RealisationFormateur} onClick={toggleMenu4}><i className="fa-solid fa-circle-check"></i>RealisationFormateur {!showRealisation ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showRealisation &&
                        <>
                            <Link to="/suivi/Realisation-Formateur-ParSemaine"><i class="fa-solid fa-chevron-right"></i>Realisation Formateur ParSemaine</Link>
                            <Link to="/suivi/RealisationFormateur"><i class="fa-solid fa-chevron-right"></i>Realisation Formateur</Link>

                        </>
                    }
                    <a className={props.semaines} onClick={toggleMenu5}><i class="fa-solid fa-calendar-plus"></i>Semaines {!showSemaine ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showSemaine &&
                        <>
                            <Link to="/semaines"><i class="fa-solid fa-chevron-right"></i>Afficher Les Semaines</Link>
                            <Link to="/semaines/AjouterSemaine"><i className="fa-solid fa-chevron-right"></i>Ajouter Semaine</Link>

                        </>
                    }
                    <a className={props.affectations} onClick={toggleMenu6}><i class="fa-solid fa-building-circle-arrow-right"> </i>Affectations{!showAfectation1 ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>}</a>
                    {
                        showAfectation1 &&
                        <>
                            <Link to="/affectations"><i className="fa-solid fa-chevron-right"></i>Affectations</Link>
                            <Link to="/affectations/AjouterAffectation"><i className="fa-solid fa-chevron-right"></i>Ajouter Affectation</Link>
                        </>
                    }
                    <Link className={props.ApTotaleGroupe} to="/suivi/ApTotaleGroupe"><i className="fa-solid fa-users-rectangle"></i> Ap Totale Groupe</Link>
                    <Link className={props.AvancementProgramme} to="/suivi/AvancementProgramme"><i className="fa-solid fa-calendar-check"></i> Avancement Programme</Link>

                </div>
            </div>
            <div class="main">
                <nav>
                    <div class="header">{props.header}</div>
                    <div onClick={() => setShowMenu(!showMenu)} class="logout">
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

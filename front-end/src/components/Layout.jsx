import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Layout = (props) => {

    const [smallAside, setSmallAside] = useState(false)

    const [showAffectation, setshowAffectation] = useState(false);
    const [showFormateur, setshowFormateur] = useState(false);
    const [showGroupe, setshowGroupe] = useState(false);
    const [showStatistiques, setshowStatistiques] = useState(false);
    const [showRealisation, setshowRealisation] = useState(false);
    const [showEmploi, setshowEmploi] = useState(false);


    const [showMenu, setShowMenu] = useState(false);
    const [showSemaine, setshowSemaine] = useState(false);
    const [showAfectation1, setshowAffectation1] = useState(false)
    const [admin, setAdmin] = useState(localStorage.getItem('admin'));
    const [Contacts, setContacts] = useState([])
    const [loadingContacts, setLoadingContacts] = useState(false)
    const navigate = useNavigate()
    const getContacts = async () => {
        setLoadingContacts(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/contacts')
            setContacts(response.data.contacts)
            setLoadingContacts(false)
        } catch (error) {
            console.log(error)
            setLoadingContacts(false)
        }
    }
    useEffect(() => {
        getContacts()
    }, [])
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
        setshowFormateur(false)
        setshowStatistiques(false)
        setshowRealisation(false)
        setshowSemaine(false)
        setshowAffectation1(false)
        setshowEmploi(false)
    };
    const toggleMenu2 = () => {
        setshowFormateur(!showFormateur);
        setshowAffectation(false)
        setshowStatistiques(false)
        setshowRealisation(false)
        setshowSemaine(false)
        setshowAffectation1(false)
        setshowEmploi(false)
    };
    const toggleMenu3 = () => {
        setshowStatistiques(!showStatistiques);
        setshowAffectation(false)
        setshowFormateur(false)
        setshowRealisation(false)
        setshowSemaine(false)
        setshowAffectation1(false)
        setshowEmploi(false)
    };
    const toggleMenu4 = () => {
        setshowRealisation(!showRealisation);

        setshowAffectation(false)
        setshowFormateur(false)
        setshowStatistiques(false)
        setshowSemaine(false)
        setshowAffectation1(false)
        setshowEmploi(false)
    };
    const toggleMenu5 = () => {
        setshowSemaine(!showSemaine);

        setshowAffectation(false)
        setshowFormateur(false)
        setshowStatistiques(false)
        setshowRealisation(false)
        setshowAffectation1(false)
        setshowEmploi(false)
    };
    const toggleMenu6 = () => {
        setshowAffectation1(!showAfectation1);

        setshowAffectation(false)
        setshowFormateur(false)
        setshowStatistiques(false)
        setshowRealisation(false)
        setshowSemaine(false)
        setshowEmploi(false)
    };
    const toggleMenu7 = () => {
        setshowEmploi(!showEmploi);

        setshowAffectation(false)
        setshowFormateur(false)
        setshowStatistiques(false)
        setshowRealisation(false)
        setshowSemaine(false)
        setshowAffectation1(false)
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

    const updateRead = async () => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/Updatecontacts`)
            getContacts()
            navigate('/ContactNotif')
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div class={`containerDahboard ${smallAside ? 'smallDash' : ''}`}>
            <div class="aside">
                <div class="brand" onClick={() => setSmallAside(!smallAside)} ><img src="http://localhost:3000/images/PPI2.png" alt="" /></div>
                <div className="linksSide">
                    <Link className={props.Dashboard} to="/Dashboard"><i className="fa-solid fa-house-chimney"></i> <span> Dashboard </span></Link>
                    <a className={props.SuiviPédagogique} onClick={toggleMenu1}><i className="fa-solid fa-user"></i> <span>Suivi Pédagogique {!showAffectation ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
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
                    <a className={props.Formateur} onClick={toggleMenu2}><i className="fa-solid fa-users"></i><span>Formateur {!showFormateur ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showFormateur &&
                        <>
                            <Link to="/formateurs/AjouterFourmateur"><i class="fa-solid fa-chevron-right"></i>Ajouter Formateur</Link>
                            <Link to="/formateurs"><i class="fa-solid fa-chevron-right"></i>Afficher Formateurs</Link>
                        </>
                    }
                    <a className={props.Statistiques} onClick={toggleMenu3}><i className="fa-solid fa-chart-simple"></i><span> Statistiques {!showStatistiques ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showStatistiques &&
                        <>
                            <Link to="/StatistiquesFormateur"><i class="fa-solid fa-chevron-right"></i>Statistiques Formateur</Link>
                            <Link to="/StatistiquesGroupe"><i class="fa-solid fa-chevron-right"></i>Statistiques Groupe</Link>

                        </>
                    }
                    <a className={props.RealisationFormateur} onClick={toggleMenu4}><i className="fa-solid fa-circle-check"></i><span> RealisationFormateur {!showRealisation ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showRealisation &&
                        <>
                            <Link to="/suivi/Realisation-Formateur-ParSemaine"><i class="fa-solid fa-chevron-right"></i>Realisation Formateur ParSemaine</Link>
                            <Link to="/suivi/RealisationFormateur"><i class="fa-solid fa-chevron-right"></i>Realisation Formateur</Link>

                        </>
                    }
                    <a className={props.semaines} onClick={toggleMenu5}><i class="fa-solid fa-calendar-plus"></i><span> Semaines {!showSemaine ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showSemaine &&
                        <>
                            <Link to="/semaines"><i class="fa-solid fa-chevron-right"></i>Afficher Les Semaines</Link>
                            <Link to="/semaines/AjouterSemaine"><i className="fa-solid fa-chevron-right"></i>Ajouter Semaine</Link>

                        </>
                    }
                    <a className={props.affectations} onClick={toggleMenu6}><i class="fa-solid fa-building-circle-arrow-right"></i> <span>Affectations{!showAfectation1 ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showAfectation1 &&
                        <>
                            <Link to="/affectations"><i className="fa-solid fa-chevron-right"></i>Affectations</Link>
                            <Link to="/affectations/AjouterAffectation"><i className="fa-solid fa-chevron-right"></i>Ajouter Affectation</Link>
                        </>
                    }
                    <a className={props.emploi} onClick={toggleMenu7}><i class="fa-solid fa-calendar-days"></i><span> Emplois{!showEmploi ? <i class="fa-solid fa-angle-right" id='arrowRight'></i> : <i class="fa-solid fa-angle-down" id='arrowRight'></i>} </span></a>
                    {
                        showEmploi &&
                        <>
                            <Link to="/EmploiTempsFormateur"><i className="fa-solid fa-chevron-right"></i>Emploi Formateur</Link>
                            <Link to="/EmploiTemps"><i className="fa-solid fa-chevron-right"></i>Emploi Groupe</Link>
                        </>
                    }
                    <Link className={props.ApTotaleGroupe} to="/suivi/ApTotaleGroupe"><i className="fa-solid fa-users-rectangle"></i> <span> Ap Totale Groupe</span></Link>
                    <Link className={props.AvancementProgramme} to="/suivi/AvancementProgramme"><i className="fa-solid fa-calendar-check"></i> <span>Avancement Programme</span></Link>
                </div>
            </div>
            <div class="main">
                <nav>
                    <div class="header"> {props.header}</div>
                    <div className='notif'>
                        <Link onClick={updateRead}>
                            <div class="notification">
                                <i class="fa-solid fa-bell"></i>
                                <span class="badge">{Contacts.filter(e => e.read == 0)?.length}</span>
                            </div>
                        </Link>
                        <div onClick={() => setShowMenu(!showMenu)} class="logout">
                            <img src="http://localhost:3000/images/provile_empty.png" alt="" />
                        </div>
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

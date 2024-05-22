import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import Emploi from "../components/Emploi";
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import Loader from './../components/Loader'
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";


const EmploiTemps = () => {
    //const { semaine } = useParams()
    const { seancesParSemaine, seances, groupes, affectations, loadingSeancesParSemaine,
        setNSemaine, nSemaine, semaines } = useContext(contextProvider);
        const [semaine, setSemaine] = useState()
        const [afficherSelect0, setAfficherSelect0] = useState(false)
        const [searchSemaine, setSearchSemaine] = useState('')
    const handleSelected0 = (s) => {
        setSemaine(s)
        setAfficherSelect0(false)
        setNSemaine(s.semaine)
    }

    const calculeMHHebdoGroupe = (groupe) => {
        let count = 0;
        seancesParSemaine
            .filter((seance) => seance.Code_Groupe === groupe && seance.formateur_Matricule)
            .map((e) => {
                count += e.MH;
            });
        return count;
    };

    const dateOfSemaine = semaines.find(s => s.semaine == nSemaine)?.firstDayOfWeek


    const [groupe, setGroupe] = useState()
    const [afficherSelect1, setAfficherSelect1] = useState(false)
    const [searchGroupe, setSearchGroupe] = useState('')


    const handleSelected1 = (groupe) => {
        setGroupe(groupe)
        setAfficherSelect1(false)
    }


    const downloadPDF = () => {
        window.print()
    };
    const [scroll, setScroll] = useState(false)

    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        setScroll(!scroll)
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScroll(!scroll)
    }

    const [admin, setAdmin] = useState(localStorage.getItem('admin'));


    return (
        <>
            {
                admin ?
                    <Navbar />
                    :
                    <Navbar2 />}
            <div className="parGroupe">
                <div className="choisir_inputs two">
                    <div className="choisir_input_box3 select">
                        <p>Groupe</p>
                        <div
                            onClick={() => setAfficherSelect1(!afficherSelect1)}
                            className="select-btn1"
                        >

                            <span >
                                {groupe
                                    ? groupe
                                    : "Selectioner un Groupe"}
                            </span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {afficherSelect1 && (
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchGroupe(e.target.value)}
                                        className="input1"
                                        spellcheck="false"
                                        type="text"
                                        placeholder="Search"
                                    />
                                </div>
                                <ul className="options1">
                                    {groupes
                                        .map((groupe, index) => {
                                            if (
                                                groupe.Code_Filiere.toLowerCase().includes(
                                                    searchGroupe.toLowerCase()
                                                )
                                            ) {
                                                return (
                                                    <li
                                                        onClick={() =>
                                                            handleSelected1(groupe.Code_Groupe)
                                                        }
                                                        key={index}
                                                    >
                                                        {groupe.Code_Groupe}
                                                    </li>
                                                );
                                            }
                                        })}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="choisir_input_box3 select">
                        <p>No Semaine Calendrier</p>
                        <div onClick={() => setAfficherSelect0(!afficherSelect0)} className="select-btn1">

                            {
                                nSemaine ?
                                    <span>{semaine ? `S - ${semaine.semaine} (${semaine.firstDayOfWeek} - ${semaine.lastDayOfWeek})` :
                                        `S - ${semaines.find(s => s.semaine == nSemaine)?.semaine} (${semaines.find(s => s.semaine == nSemaine)?.firstDayOfWeek} - ${semaines.find(s => s.semaine == nSemaine)?.lastDayOfWeek})`}</span>
                                    :
                                    <span>Choisir Une Semaine</span>
                            }

                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect0 &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchSemaine(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        semaines.map((s, index) => (
                                            <li onClick={() => handleSelected0(s)} key={index}>
                                                S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek})
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <button className="btnDownload" onClick={downloadPDF}><i className="fa fa-download"> Telecharger</i></button>

                <div >
                    {
                        loadingSeancesParSemaine ? <Loader />
                            :
                            <>
                                {!groupe ? groupes.map((groupe) => (
                                    <Emploi
                                        groupe={groupe.Code_Groupe}
                                        date={dateOfSemaine}
                                        masseHoraire={calculeMHHebdoGroupe(groupe.Code_Groupe)}
                                        annee={affectations.find((aff) => aff.Code_Groupe == groupe.Code_Groupe)?.module.annee}
                                    />
                                ))
                                    :
                                    <Emploi
                                        groupe={groupe}
                                        date={dateOfSemaine}
                                        masseHoraire={calculeMHHebdoGroupe(groupe)}
                                        annee={affectations.find((aff) => aff.Code_Groupe == groupe)?.module.annee}
                                    />
                                }
                            </>
                    }
                    {!loadingSeancesParSemaine && <div className="arrowDown">
                        {
                            scroll ?
                                <i onClick={goToTop} className="fa-solid fa-circle-up"></i>
                                :
                                <i onClick={goToBottom} className="fa-solid fa-circle-down"></i>
                        }
                    </div>}
                </div>
            </div>
        </>
    );
};

export default EmploiTemps;

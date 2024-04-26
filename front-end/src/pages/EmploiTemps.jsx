import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import Emploi from "../components/Emploi";
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import Loader from './../components/Loader'
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";


const EmploiTemps = () => {
    const {semaine}=useParams()

    const pdfRef = useRef();
    const { seancesParSemaine, seances, groupes, affectations,loadingSeancesParSemaine ,
        setNSemaine , nSemaine , semaines} = useContext(contextProvider);
        


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
    
    


    return (
        <>
        <Navbar />
        <div className="parGroupe">
            <div className="choisir_inputs two">
                <div className="choisir_input_box3 select">
                    <p>Groupe</p>
                    <div
                        onClick={() => setAfficherSelect1(!afficherSelect1)}
                        className="select-btn1"
                    >
                        <span ref={pdfRef}>
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
            </div>
            <button className="btnDownload" onClick={downloadPDF}><i className="fa fa-download"> Telecharger</i></button>

            <div ref={pdfRef}>
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

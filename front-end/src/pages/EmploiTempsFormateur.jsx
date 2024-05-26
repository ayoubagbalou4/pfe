import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import EmploiFormateur from "../components/EmploiFormateur";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";

const EmploiTempsFormateur = () => {
    const pdfRef = useRef();
    const {
        seancesParSemaine,
        formateurs,
        affectations,
        loadingSeancesParSemaine,
        nSemaine,
        semaines,
        setNSemaine
    } = useContext(contextProvider);

    const calculeMHHebdoGroupe = (formateur) => {
        let count = 0;
        const uniqueSeances = new Set();

        seancesParSemaine.filter((seance) => seance.formateur_Matricule == formateur).forEach((e) => {
            if (e.Id_Salle === "AMPHI" || e.Id_Salle === "A distance") {
                const key = `${e.formateur_Matricule}-${e.Date}-${e.code_seance}-${e.Id_Salle}`;
                if (uniqueSeances.has(key)) {
                    return;
                }
                uniqueSeances.add(key);
            }
            count += e.MH;
        });

        return count;
    };


    const dateOfSemaine = semaines.find(
        (s) => s.semaine == nSemaine
    )?.firstDayOfWeek;

    const [formateur, setFormateur] = useState();
    const [afficherSelect1, setAfficherSelect1] = useState(false);
    const [searchFormateur, setSearchFormateur] = useState("");

    const [semaine, setSemaine] = useState()
    const [afficherSelect0, setAfficherSelect0] = useState(false)
    const [searchSemaine, setSearchSemaine] = useState('')
    const handleSelected0 = (s) => {
        setSemaine(s)
        setAfficherSelect0(false)
        setNSemaine(s.semaine)
    }

    const handleSelected1 = (formateur) => {
        setFormateur(formateur);
        setAfficherSelect1(false);
    };

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
                        <p>Formateur</p>
                        <div
                            onClick={() => setAfficherSelect1(!afficherSelect1)}
                            className="select-btn1"
                        >
                            <span>
                                {formateur
                                    ? formateur.Nom_Formateur
                                    : "Selectioner un Formateur"}
                            </span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {afficherSelect1 && (
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input
                                        onChange={(e) =>
                                            setSearchFormateur(e.target.value)
                                        }
                                        className="input1"
                                        spellcheck="false"
                                        type="text"
                                        placeholder="Search"
                                    />
                                </div>
                                <ul className="options1">
                                    {formateurs.map((formateur, index) => {
                                        if (
                                            formateur.Nom_Formateur.toLowerCase().includes(
                                                searchFormateur.toLowerCase()
                                            )
                                        ) {
                                            return (
                                                <li
                                                    onClick={() =>
                                                        handleSelected1(formateur)
                                                    }
                                                    key={index}
                                                >
                                                    {formateur.Nom_Formateur}
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

                <button className="btnDownload" onClick={downloadPDF}>
                    <i className="fa fa-download"> Telecharger</i>
                </button>
                <div >
                    {loadingSeancesParSemaine ? (
                        <Loader />
                    ) : (
                        <>
                            {!formateur ? (
                                formateurs.map((formateur) => (
                                    <EmploiFormateur
                                        nomFormateur={formateur.Nom_Formateur}
                                        date={dateOfSemaine}
                                        formateur={formateur.Matricule}
                                        masseHoraire={calculeMHHebdoGroupe(
                                            formateur.Matricule
                                        )}
                                        annee={
                                            affectations.find(
                                                (aff) =>
                                                    aff.formateur_Matricule ==
                                                    formateur.Matricule
                                            )?.module.annee
                                        }
                                    />
                                ))
                            ) : (
                                <>
                                    <EmploiFormateur
                                        nomFormateur={formateur.Nom_Formateur}
                                        date={dateOfSemaine}
                                        formateur={formateur.Matricule}
                                        masseHoraire={calculeMHHebdoGroupe(
                                            formateur
                                        )}
                                        annee={
                                            affectations.find(
                                                (aff) =>
                                                    aff.formateur_Matricule ==
                                                    formateur.Matricule
                                            )?.module.annee
                                        }
                                    />
                                </>
                            )}
                        </>
                    )}
                    {!loadingSeancesParSemaine && (
                        <div className="arrowDown">
                            {scroll ? (
                                <i
                                    onClick={goToTop}
                                    className="fa-solid fa-circle-up"
                                ></i>
                            ) : (
                                <i
                                    onClick={goToBottom}
                                    className="fa-solid fa-circle-down"
                                ></i>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default EmploiTempsFormateur;

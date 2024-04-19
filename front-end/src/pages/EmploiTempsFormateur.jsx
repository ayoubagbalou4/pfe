import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import EmploiFormateur from "../components/EmploiFormateur";


const EmploiTempsFormateur = () => {

    const pdfRef = useRef();
    const { seancesParSemaine, formateurs, affectations } =
        useContext(contextProvider);

    const calculeMHHebdoGroupe = (formateur) => {
        let count = 0;
        seancesParSemaine
            .filter((seance) => seance.formateur_Matricule == formateur.Matricule)
            .map((e) => {
                count += e.MH;
            });
        return count;
    };


    const [formateur, setFormateur] = useState()
    const [afficherSelect1, setAfficherSelect1] = useState(false)
    const [searchFormateur, setSearchFormateur] = useState('')

    
    const handleSelected1 = (formateur) => {
        setFormateur(formateur)
        setAfficherSelect1(false)
    }

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPdf('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save("emploi_temps_Formateurs.pdf");
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };

    return (
        <div className="parGroupe">
            <div className="choisir_inputs two">
                <div className="choisir_input_box3 select">
                    <p>Formateur</p>
                    <div
                        onClick={() => setAfficherSelect1(!afficherSelect1)}
                        className="select-btn1"
                    >
                        <span ref={pdfRef}>
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
                                <input onChange={(e) =>setSearchFormateur(e.target.value)}
                                    className="input1"
                                    spellcheck="false"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <ul className="options1">
                                {formateurs
                                    .map((formateur, index) => {
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
            </div>

                <button className="btn" onClick={downloadPDF}><i className="fa fa-download"> Telecharger</i></button>
            <div ref={pdfRef}>
            {!formateur ? formateurs.map((formateur) => (
                <EmploiFormateur
                    nomFormateur={formateur.Nom_Formateur}
                    formateur={formateur.Matricule}
                    masseHoraire={calculeMHHebdoGroupe(formateur)}
                    annee={affectations.find((aff) => aff.formateur_Matricule == formateur.Matricule)?.module.annee}
                />
            ))
            : 
            <>
            <EmploiFormateur
                    nomFormateur={formateur.Nom_Formateur}
                    formateur={formateur.Matricule}
                    masseHoraire={calculeMHHebdoGroupe(formateur)}
                    annee={affectations.find((aff) => aff.formateur_Matricule == formateur.Matricule)?.module.annee}
                />
            </>
        }
            </div>
        </div>
    );
};

export default EmploiTempsFormateur;

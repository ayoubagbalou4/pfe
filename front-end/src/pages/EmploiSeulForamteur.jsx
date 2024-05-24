import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import EmploiFormateur from "../components/EmploiFormateur";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const EmploiSeulForamteur = () => {

    const { matricule } = useParams();

    const {
        seancesParSemaine,
        formateurs,
        affectations,
        loadingSeancesParSemaine,
        nSemaine,
        semaines,
    } = useContext(contextProvider);

    const calculeMHHebdoGroupe = (formateur) => {
        let count = 0;
        seancesParSemaine
            .filter(
                (seance) => seance.formateur_Matricule == formateur.Matricule
            )
            .map((e) => {
                count += e.MH;
            });
        return count;
    };

    const dateOfSemaine = semaines.find(
        (s) => s.semaine == nSemaine
    )?.firstDayOfWeek;


    const formateur = formateurs.find(formateur => formateur.Matricule == matricule)

    const downloadPDF = () => {
        window.print()

    };


    return (
        <>
            <Navbar />
            <div className="parGroupe">

                <button className="btnDownload" onClick={downloadPDF}>
                    <i className="fa fa-download"> Telecharger</i>
                </button>
                {loadingSeancesParSemaine ?
                    <Loader />
                    :
                    <>
                        <EmploiFormateur
                            nomFormateur={formateur?.Nom_Formateur}
                            date={dateOfSemaine}
                            formateur={formateur?.Matricule}
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
                }
            </div>
        </>
    );
};

export default EmploiSeulForamteur;

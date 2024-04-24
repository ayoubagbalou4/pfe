import React, { useContext, useRef, useState } from "react";
import { contextProvider } from "../context/Context";
import Emploi from "../components/Emploi";
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';
import Loader from './../components/Loader'
import { useParams } from "react-router-dom";


const EmploiTemps = () => {
    const {semaine}=useParams()

    const pdfRef = useRef();
    const { seancesParSemaine, seances, groupes, affectations,loadingSeancesParSemaine ,
        setNSemaine} = useContext(contextProvider);
        
    setNSemaine(semaine)


    const calculeMHHebdoGroupe = (groupe) => {
        let count = 0;
        seancesParSemaine
            .filter((seance) => seance.Code_Groupe === groupe)
            .map((e) => {
                count += e.MH;
            });
        return count;
    };


    const [groupe, setGroupe] = useState()
    const [afficherSelect1, setAfficherSelect1] = useState(false)
    const [searchGroupe, setSearchGroupe] = useState('')


    const handleSelected1 = (groupe) => {
        setGroupe(groupe)
        setAfficherSelect1(false)
    }

    const downloadPDF = () => {
        const input = pdfRef.current;


        html2canvas(input, { scale: 2 }) // Adjust scale as needed for better resolution
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
                pdf.save("emploi_temp_Groupes.pdf");
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };


    return (
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
                                    masseHoraire={calculeMHHebdoGroupe(groupe)}
                                    annee={affectations.find((aff) => aff.Code_Groupe == groupe.Code_Groupe)?.module.annee}
                                />
                            ))
                                :
                                <Emploi
                                    groupe={groupe}
                                    masseHoraire={calculeMHHebdoGroupe(groupe)}
                                    annee={affectations.find((aff) => aff.Code_Groupe == groupe)?.module.annee}
                                />
                            }
                        </>
                }

            </div>
        </div>
    );
};

export default EmploiTemps;

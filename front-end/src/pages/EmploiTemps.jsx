import React, { useContext, useState } from "react";
import { contextProvider } from "../context/Context";
import Emploi from "../components/Emploi";

const EmploiTemps = () => {
    const { seancesParSemaine, seances, groupes, affectations } =
        useContext(contextProvider);

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

    return (
        <div className="parGroupe">
            <div className="choisir_inputs two">
                <div className="choisir_input_box3 select">
                    <p>Groupe</p>
                    <div
                        onClick={() => setAfficherSelect1(!afficherSelect1)}
                        className="select-btn1"
                    >
                        <span>
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
                                <input onChange={(e) =>setSearchGroupe(e.target.value)}
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
        </div>
    );
};

export default EmploiTemps;

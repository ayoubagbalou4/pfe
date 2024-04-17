import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { contextProvider } from "../context/Context";

const AvancementProgramme = () => {
    const { affectations, seances, semaineNumber, groupes } =
        useContext(contextProvider);
    const [groupe, setGroupe] = useState();
    const [afficherSelect, setAfficherSelect] = useState(false);
    const [searchGroupe, setSearchGroupe] = useState("");
    const handleSelected = (groupe) => {
        setGroupe(groupe);
        setAfficherSelect(false);
    };
    const calculeMHHebdoGroupe = (groupe, semaine) => {
        let count = 0;
        seances
            .filter(
                (seance) =>
                    seance.Code_Groupe === groupe &&
                    seance.No_Semaine_Calendrier === semaine
            )
            .map((e) => {
                count += e.MH;
            });
        return count;
    };
    const groupeFilter = affectations.find((e) => e.Code_Groupe == groupe);
    return (
        <>
            <Navbar />

            <div className="parGroupe">
                <h1>MH hebdomadaires par groupes</h1>
                <div className="choisir_inputs two">
                    <div className="choisir_input_box3 select">
                        <p>Groupe</p>
                        <div
                            onClick={() => setAfficherSelect(!afficherSelect)}
                            className="select-btn1"
                        >
                            <span>
                                {groupe ? groupe : "Selectioner un Groupe"}
                            </span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {afficherSelect && (
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input
                                        onChange={(e) =>
                                            setAfficherSelect(e.target.value)
                                        }
                                        className="input1"
                                        spellcheck="false"
                                        type="text"
                                        placeholder="Search"
                                    />
                                </div>
                                <ul className="options1">
                                    {groupes.map((s, index) => (
                                        <li
                                            onClick={() =>
                                                handleSelected(s.Code_Groupe)
                                            }
                                            key={index}
                                        >
                                            {s.Code_Groupe}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Annee</th>
                            <th>Groupe</th>
                            {semaineNumber.map((semaine) => (
                                <th> MH Hebdo -S {semaine.number}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {groupe ? (
                            <tr>
                                <td>{groupeFilter.module.annee}</td>
                                <td>{groupeFilter.Code_Groupe}</td>
                                {semaineNumber.map((semaine) => (
                                    <td>
                                        {calculeMHHebdoGroupe(
                                            groupeFilter.Code_Groupe,
                                            semaine.number
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ) : (
                            affectations.map((groupe) => (
                                <tr>
                                    <td>{groupe.module.annee}</td>
                                    <td>{groupe.Code_Groupe}</td>

                                    {semaineNumber.map((semaine) => (
                                        <td>
                                            {calculeMHHebdoGroupe(
                                                groupe.Code_Groupe,
                                                semaine.number
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AvancementProgramme;

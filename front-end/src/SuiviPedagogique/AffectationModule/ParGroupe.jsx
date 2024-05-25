import React, { useContext, useEffect, useState } from "react";
import Navbar from "./../../components/Navbar";
import { contextProvider } from "../../context/Context";
import Layout from "../../components/Layout";
import * as XLSX from "xlsx";
import axios from "axios";

const ParGroupe = () => {
    const { groupes, filieres, filiereModules, affectations } =
        useContext(contextProvider);

    const [filiere, setFiliere] = useState();
    const [groupe, setGroupe] = useState();

    const [afficherSelect, setAfficherSelect] = useState(false);
    const [afficherSelect1, setAfficherSelect1] = useState(false);
    const [searchFiliere, setSearchFiliere] = useState("");
    const [searchGroupe, setSearchGroupe] = useState("");

    const handleSelected = (filiere) => {
        setFiliere(filiere);
        setAfficherSelect(false);
        setGroupe("");
    };
    const handleSelected1 = (groupe) => {
        setGroupe(groupe);
        setAfficherSelect1(false);
    };
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(
            filiereModules.map((m, index) => ({
                Module: m.module.Id_module,
                "Numero Module": m.module.code_module,
                "Formateur Referent": affectations.find(
                    (a) => a.Id_module == m.module.Id_module
                ).formateur.Nom_Formateur,
                MHP_S1: m.module.MHP_S1,
                MHP_S2: m.module.MHP_S2,
                MHSYN_S1: m.module.MHSYN_S1,
                MHSYN_S2: m.module.MHSYN_S2,
                COF: m.module.Coef,
                Regional: m.module.EFM_Regional,
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Affecation des modules"
        );
        XLSX.writeFile(workbook, "Affecation_des_modules.xlsx");
    };

    const [anneeScolaire, setAnneeScolaire] = useState([])
    const [loadingAnneeScolaire, setLoadingAnneeScolaire] = useState(false)
    const getAnneeScolaire = async () => {
        setLoadingAnneeScolaire(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getAnneeScolaires')
            setAnneeScolaire(response.data.annees)
            setLoadingAnneeScolaire(false)
        } catch (error) {
            console.log(error)
            setLoadingAnneeScolaire(false)
        }
    }
    useEffect(() => {
        getAnneeScolaire()
    }, [])

    return (
        <Layout
            header={"Affecation des modules"}
            SuiviPédagogique={"active"}
            content={
                <div class="contentDashboard">
                    <div className="parGroupe">
                        <h1>Affecation des modules</h1>
                        <div className="headerD">
                            <button
                                className="btnDownload"
                                onClick={exportToExcel}
                            >
                                <i class="fa-solid fa-file-csv"></i> Export to
                                Excel
                            </button>
                            
                        </div>

                        <div className="choisir_inputs two">
                            <div className="choisir_input_box3 select">
                                <p>Filiere</p>
                                <div
                                    onClick={() =>
                                        setAfficherSelect(!afficherSelect)
                                    }
                                    className="select-btn1"
                                >
                                    <span>
                                        {filiere
                                            ? filiere.Libelle_Filiere
                                            : "Selectioner un Filiere"}
                                    </span>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                                {afficherSelect && (
                                    <div className="content">
                                        <div className="search">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <input
                                                onChange={(e) =>
                                                    setSearchFiliere(
                                                        e.target.value
                                                    )
                                                }
                                                className="input1"
                                                spellcheck="false"
                                                type="text"
                                                placeholder="Search"
                                            />
                                        </div>
                                        <ul className="options1">
                                            {filieres.map((e, index) => {
                                                if (
                                                    e.Libelle_Filiere.toLowerCase().includes(
                                                        searchFiliere.toLowerCase()
                                                    )
                                                ) {
                                                    return (
                                                        <li
                                                            onClick={() =>
                                                                handleSelected(
                                                                    e
                                                                )
                                                            }
                                                            key={index}
                                                        >
                                                            {e.Libelle_Filiere}
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <div className="choisir_input_box3 select">
                                <p>Groupe</p>
                                <div
                                    onClick={() =>
                                        setAfficherSelect1(!afficherSelect1)
                                    }
                                    className="select-btn1"
                                >
                                    <span>
                                        {groupe
                                            ? groupe.Code_Groupe
                                            : "Selectioner un Groupe"}
                                    </span>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                                {afficherSelect1 && (
                                    <div className="content">
                                        <div className="search">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                            <input
                                                onChange={(e) =>
                                                    setSearchGroupe(
                                                        e.target.value
                                                    )
                                                }
                                                className="input1"
                                                spellcheck="false"
                                                type="text"
                                                placeholder="Search"
                                            />
                                        </div>
                                        <ul className="options1">
                                            {groupes
                                                .filter(
                                                    (e) =>
                                                        e.Code_Filiere ==
                                                        filiere.Code_Filiere
                                                )
                                                .map((groupe, index) => {
                                                    if (
                                                        groupe.Code_Filiere.toLowerCase().includes(
                                                            searchGroupe.toLowerCase()
                                                        )
                                                    ) {
                                                        return (
                                                            <li
                                                                onClick={() =>
                                                                    handleSelected1(
                                                                        groupe
                                                                    )
                                                                }
                                                                key={index}
                                                            >
                                                                {
                                                                    groupe.Code_Groupe
                                                                }
                                                            </li>
                                                        );
                                                    }
                                                })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p>
                            Modules Affectes :{" "}
                            <span>
                                {groupe &&
                                    affectations.filter(
                                        (a) =>
                                            a.Code_Groupe == groupe.Code_Groupe
                                    ).length}
                            </span>
                        </p>
                        <table className="groupeTable">
                            <thead>
                                <tr>
                                    <th>Module</th>
                                    <th>Numero Module</th>
                                    <th>Formateur Referent</th>
                                    <th>MHP_S1</th>
                                    <th>MHP_S2</th>
                                    <th>MHSYN_S1</th>
                                    <th>MHSYN_S2</th>
                                    <th>COF</th>
                                    <th>Regional</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filiere
                                    ? filiereModules
                                          .filter(
                                              (e) =>
                                                  e.Code_Filiere ==
                                                  filiere.Code_Filiere
                                          )
                                          .map((m, index) => (
                                              <tr key={index}>
                                                  <td>{m.module.Id_module}</td>
                                                  <td>
                                                      {m.module.code_module}
                                                  </td>
                                                  <td>
                                                      {
                                                          affectations.find(
                                                              (a) =>
                                                                  a.Id_module ==
                                                                  m.module
                                                                      .Id_module
                                                          ).formateur
                                                              .Nom_Formateur
                                                      }
                                                  </td>
                                                  <td>{m.module.MHP_S1}</td>
                                                  <td>{m.module.MHP_S2}</td>
                                                  <td>{m.module.MHSYN_S1}</td>
                                                  <td>{m.module.MHSYN_S2}</td>
                                                  <td>{m.module.Coef}</td>
                                                  <td>
                                                      {m.module.EFM_Regional}
                                                  </td>
                                              </tr>
                                          ))
                                    : filiereModules.map((m, index) => (
                                          <tr key={index}>
                                              <td>{m.module.Id_module}</td>
                                              <td>{m.module.code_module}</td>
                                              <td>
                                                  {
                                                      affectations.find(
                                                          (a) =>
                                                              a.Id_module ==
                                                              m.module.Id_module
                                                      ).formateur.Nom_Formateur
                                                  }
                                              </td>
                                              <td>{m.module.MHP_S1}</td>
                                              <td>{m.module.MHP_S2}</td>
                                              <td>{m.module.MHSYN_S1}</td>
                                              <td>{m.module.MHSYN_S2}</td>
                                              <td>{m.module.Coef}</td>
                                              <td>{m.module.EFM_Regional}</td>
                                          </tr>
                                      ))}
                            </tbody>
                        </table>
                        <p>
                            Modules Non Affectes :{" "}
                            <span>
                                {groupe &&
                                    affectations.filter((a) =>
                                        a.Code_Groupe.includes(
                                            !groupe.Code_Groupe
                                        )
                                    ).length}
                            </span>
                        </p>
                    </div>
                </div>
            }
        />
    );
};

export default ParGroupe;

import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { contextProvider } from "../context/Context";
import Layout from "../components/Layout";
import * as XLSX from "xlsx";
import ReactPaginate from "react-paginate";

const AvancementProgramme = () => {

    const { affectations, seances, semaineNumber,semaines, groupes } =
        useContext(contextProvider);
    const [groupe, setGroupe] = useState();
    const [afficherSelect, setAfficherSelect] = useState(false);
    const [searchGroupe, setSearchGroupe] = useState('')
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

    const exportToExcel = () => {
        const data = [];
        data.push([
            "Annee",
            "Groupe",
            ...semaineNumber.map((semaine) => `MH Hebdo -S ${semaine.number}`),
        ]);

        if (groupe) {
            const rowData = [
                affectations.find((e) => e.Code_Groupe === groupe)?.module
                    .annee,
                groupe,
                ...semaineNumber.map((semaine) =>
                    calculeMHHebdoGroupe(groupe, semaine.number)
                ),
            ];
            data.push(rowData);
        } else {
            affectations.forEach((groupe) => {
                const rowData = [
                    groupe.module.annee,
                    groupe.Code_Groupe,
                    ...semaineNumber.map((semaine) =>
                        calculeMHHebdoGroupe(groupe.Code_Groupe, semaine.number)
                    ),
                ];
                data.push(rowData);
            });
        }

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Avancement Programme");
        XLSX.writeFile(wb, "Avancement_Programme.xlsx");
    };

    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 3;
    const pageCount = Math.ceil(semaines.length / itemsPerPage);

    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };

    const offset = pageNumber * itemsPerPage;
    const paginatedData = semaines.slice(offset, offset + itemsPerPage);

    const groupeFilter = affectations.find((e) => e.Code_Groupe == groupe);
    return (
        <Layout
            header={"MH hebdomadaires par groupes"}
            AvancementProgramme={"active"}
            content={
                <div class="contentDashboard">
                    <div className="parGroupe">
                        <h1>MH hebdomadaires par groupes</h1>
                        <button className="btnDownload" onClick={exportToExcel}>
                            <i class="fa-solid fa-file-csv"></i> Export to Excel
                        </button>
                        <div className="choisir_inputs two">
                            <div className="choisir_input_box3 select">
                                <p>Groupe</p>
                                <div
                                    onClick={() =>
                                        setAfficherSelect(!afficherSelect)
                                    }
                                    className="select-btn1"
                                >
                                    <span>
                                        {groupe
                                            ? groupe
                                            : "Selectioner un Groupe"}
                                    </span>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                                {afficherSelect && (
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
                                            {groupes.map((s, index) => {
                                                  if (s.Code_Groupe.toLowerCase().includes(searchGroupe.toLowerCase())) {
                                                    return (
                                                 <li
                                                    onClick={() =>
                                                        handleSelected(
                                                            s.Code_Groupe
                                                        )
                                                    }
                                                    key={index}
                                                >
                                                    {s.Code_Groupe}
                                                </li>                                                    )
                                                }


                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* //  <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>

                                </div>
                                <ul className="options1">
                                    {
                                        formateurs.map((e, index) => {
                                            if (e.Nom_Formateur.toLowerCase().includes(searchFormateur.toLowerCase())) {
                                                return (
                                                    <li onClick={() => handleSelected(e)} key={index}>{e.Nom_Formateur}</li>
                                                )
                                            }
                                        })
                                    }
                                </ul>// */}

                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />

                        <table>
                            <thead>
                                <tr>
                                    <th>Annee</th>
                                    <th>Groupe</th>
                                    {paginatedData.map((s) => (
                                        <th> MH Hebdo -S {s.semaine}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {groupe ? (
                                    <tr>
                                        <td>{groupeFilter.module.annee}</td>
                                        <td>{groupeFilter.Code_Groupe}</td>
                                        {paginatedData.map((s) => (
                                            <td>
                                                {calculeMHHebdoGroupe(
                                                    groupeFilter.Code_Groupe,
                                                    s.semaine
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ) : (
                                    groupes.map((groupe) => (
                                        <tr>
                                            <td>
                                                {
                                                    affectations.find(
                                                        (aff) =>
                                                            aff.Code_Groupe ==
                                                            groupe.Code_Groupe
                                                    )?.module.annee
                                                }
                                            </td>
                                            <td>{groupe.Code_Groupe}</td>
                                            {paginatedData.map((s) => (
                                                <td>
                                                    {calculeMHHebdoGroupe(
                                                        groupe.Code_Groupe,
                                                        s.semaine
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>


                    </div>
                </div>
            }
        />
    );
};

export default AvancementProgramme;

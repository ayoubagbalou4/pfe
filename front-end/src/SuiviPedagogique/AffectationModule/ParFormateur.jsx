import React, { useContext, useEffect, useState } from 'react'
import Context, { contextProvider } from '../../context/Context';
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import * as XLSX from 'xlsx';
import dateFormat, { masks } from "dateformat";


const ParFormateur = () => {
    const [formateur, setFormateur] = useState();
    const [total, setTotal] = useState();
    const [totalsync, setTotalSync] = useState();
    const { formateurs, affectations, filiereModules } = useContext(contextProvider);

    const [afficherSelect, setAfficherSelect] = useState(false)
    const [searchFormateur, setSearchFormateur] = useState('')

    const handleSelected = (formateur) => {
        setFormateur(formateur)
        setAfficherSelect(false)
    }

    useEffect(() => {
        let total = 0;
        affectations.filter(f => f.formateur_Matricule == formateur?.Matricule).map((e) => {
            let t = parseInt(e.module.MHP_S1 + e.module.MHP_S2)
            total += t
        })
        setTotal(total)
    }, [formateur])

    useEffect(() => {
        let totalSync = 0;
        affectations.filter(f => f.formateur_Matricule == formateur?.Matricule).map((e) => {
            let t = parseInt(e.module.MHSYN_S1 + e.module.MHSYN_S2)
            totalSync += t
        })
        setTotalSync(totalSync)

    }, [formateur])

    
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(affectations
        .map((m, index) => ({
            'Date Affectation': m.module.Id_module,
            'Filiere': m.module.code_module,
            'Annee Formation': affectations.find(a => a.Id_module == m.module.Id_module).formateur.Nom_Formateur,
            'Groupe': m.module.MHP_S1,
            'Code Module': m.module.MHP_S2,
            'Module': m.module.MHSYN_S1,
            'MH Affectee': m.module.MHSYN_S2,


        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Affecation des modules');
        XLSX.writeFile(workbook, 'Affecation_des_modules.xlsx');
    };

    return (
        <Layout header={"Affecation des modules Par Formateur"} SuiviPédagogique={"active"} content={
            <div class="contentDashboard">
                <div className='parGroupe'>
                    <h1>Affecation des modules Par Formateur</h1>
                    <button className='btnDownload' onClick={exportToExcel}><i class="fa-solid fa-file-csv"></i>  Export to Excel</button>


                    <div className="choisir_inputs two">
                        <div className="choisir_input_box3 select">
                            <p>Formateur</p>
                            <div onClick={() => setAfficherSelect(!afficherSelect)} className="select-btn1">
                                <span>{formateur ? formateur.Nom_Formateur : "Selectioner un Formateur"}</span>
                                <i className="uil uil-angle-down"></i>
                            </div>
                            {
                                afficherSelect &&
                                <div className="content">
                                    <div className="search">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <input onChange={(e) => setSearchFormateur(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
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
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>


                    <p>Affectation Mode Pesentiel: <span>{formateur && affectations.filter(a => a.formateur_Matricule == formateur.Matricule).length}</span></p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date Affectation</th>
                                <th>Filiere</th>
                                <th>Annee Formation</th>
                                <th>Groupe</th>
                                <th>Code Module</th>
                                <th>Module</th>
                                <th>MH Affectee</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                formateur ?
                                    affectations.filter(f => f.formateur_Matricule == formateur.Matricule)
                                        .map((formateur, index) =>
                                        (
                                            <tr key={index}>
                                                <td>{dateFormat(formateur.created_at, "yyyy-mm-dd")}</td>
                                                <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                                <td>{formateur.module.annee}</td>
                                                <td>{formateur.Code_Groupe}</td>
                                                <td>{formateur.module.code_module}</td>
                                                <td>{formateur.module.Intitule_module}</td>
                                                <td>{parseInt(formateur.module.MHP_S1 + formateur.module.MHP_S2)}</td>
                                            </tr>
                                        ))
                                    :
                                    affectations.map((formateur, index) => (
                                        <tr key={index}>
                                            <td>{dateFormat(formateur.created_at, "yyyy-mm-dd")}</td>
                                            <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                            <td>{formateur.module.annee}</td>
                                            <td>{formateur.Code_Groupe}</td>
                                            <td>{formateur.module.code_module}</td>
                                            <td>{formateur.module.Intitule_module}</td>
                                            <td>{parseInt(formateur.module.MHP_S1 + formateur.module.MHP_S2)}</td>
                                        </tr>
                                    ))
                            }

                        </tbody>
                    </table>
                    <p>Total MH affectée en présentiel : <span>{total}</span></p>
                    <br /><br />

                    <p>Affectation Mode à distance: <span>{formateur && affectations.filter(a => a.formateur_Matricule == formateur.Matricule).length}</span></p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date Affectation</th>
                                <th>Filiere</th>
                                <th>Annee Formation</th>
                                <th>Groupe</th>
                                <th>Code Module</th>
                                <th>Module</th>
                                <th>MH Affectee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                formateur ?
                                    affectations.filter(f => f.formateur_Matricule == formateur.Matricule)
                                        .map((formateur, index) =>
                                        (
                                            <tr key={index}>
                                                <td>03/04/2024</td>
                                                <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                                <td>{formateur.module.annee}</td>
                                                <td>{formateur.Code_Groupe}</td>
                                                <td>{formateur.module.code_module}</td>
                                                <td>{formateur.module.Intitule_module}</td>
                                                <td>{parseInt(formateur.module.MHSYN_S1 + formateur.module.MHSYN_S2)}</td>
                                            </tr>
                                        ))
                                    :
                                    affectations.map((formateur, index) => (
                                        <tr key={index}>
                                            <td>03/04/2024</td>
                                            <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                            <td>{formateur.module.annee}</td>
                                            <td>{formateur.Code_Groupe}</td>
                                            <td>{formateur.module.code_module}</td>
                                            <td>{formateur.module.Intitule_module}</td>
                                            <td>{parseInt(formateur.module.MHSYN_S1 + formateur.module.MHSYN_S2)}</td>
                                        </tr>
                                    ))
                            }

                        </tbody>
                    </table>
                    <p>Total MH affectée à distance : <span>{totalsync}</span></p>

                    <div>Total MH affectée à distance : {totalsync + total}</div>
                </div>
            </div>
        }
        />
    )
}

export default ParFormateur

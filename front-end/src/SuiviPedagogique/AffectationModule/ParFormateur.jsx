import React, { useContext, useState } from 'react'
import Context, { contextProvider } from '../../context/Context';
import Navbar from '../../components/Navbar';

const ParFormateur = () => {
    const [formateur, setFormateur] = useState();
    const { formateurs, affectations, filiereModules } = useContext(contextProvider);

    return (
        <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Affecation des modules Par Formateur</h1>
                <div className="selectFiliere">
                    <div>
                        Formateur : <select onChange={(e) => setFormateur(e.target.value)}>
                            <option value="" disabled selected>Choisir Formateur</option>
                            {
                                formateurs.map((formateur, index) => (
                                    <option value={formateur.Matricule} key={index}>{formateur.Nom_Formateur}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <p>Affectation Mode Pesentiel: <span>13</span></p>
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
                                affectations.filter(f => f.formateur_Matricule == formateur)
                                    .map((formateur, index) =>
                                    (
                                        <tr key={index}>
                                            <td>03/04/2024</td>
                                            <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                            <td>{formateur.module.annee}</td>
                                            <td>{formateur.Code_Groupe}</td>
                                            <td>{formateur.module.code_module}</td>
                                            <td>{formateur.module.Intitule_module}</td>
                                            <td>{formateur.module.MHT}</td>
                                        </tr>
                                    ))
                                :
                                affectations.map((formateur, index) =>(
                                        <tr key={index}>
                                            <td>03/04/2024</td>
                                            <td>{filiereModules.find(e => e.Id_module == formateur.Id_module)?.Code_Filiere}</td>
                                            <td>{formateur.module.annee}</td>
                                            <td>{formateur.Code_Groupe}</td>
                                            <td>{formateur.module.code_module}</td>
                                            <td>{formateur.module.Intitule_module}</td>
                                            <td>{formateur.module.MHT}</td>
                                        </tr>
                                    ))
                        }

                    </tbody>
                </table>
                <p>Modules Non Affectes : <span>1</span></p>
            </div>
        </>
    )
}

export default ParFormateur

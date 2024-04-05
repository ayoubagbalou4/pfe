import React, { useContext, useEffect, useState } from 'react'
import Context, { contextProvider } from '../../context/Context';
import Navbar from '../../components/Navbar';

const ParFormateur = () => {
    const [formateur, setFormateur] = useState();
    const [total, setTotal] = useState();
    const [totalsync, setTotalSync] = useState();
    const {formateurs,affectations,filiereModules} = useContext(contextProvider);

    useEffect(()=>{
        let total=0;
        affectations.filter(f => f.formateur_Matricule == formateur).map((e)=>{
            let t = parseInt(e.module.MHP_S1+e.module.MHP_S2)
            total+=t
        })
        setTotal(total)
    },[formateur])

    useEffect(()=>{
        let totalSync=0;
        affectations.filter(f => f.formateur_Matricule == formateur).map((e)=>{
            let t = parseInt(e.module.MHSYN_S1+e.module.MHSYN_S2)
            totalSync+=t
        })
        setTotalSync(totalSync)

    },[formateur])

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
                <p>Affectation Mode Pesentiel: <span>{affectations.filter(a => a.formateur_Matricule == formateur).length}</span></p>
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
                                            <td>{parseInt(formateur.module.MHP_S1+formateur.module.MHP_S2)}</td>
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
                                            <td>{parseInt(formateur.module.MHP_S1+formateur.module.MHP_S2)}</td>
                                        </tr>
                                    ))
                        }

                    </tbody>
                </table>
                <p>Total MH affectée en présentiel : <span>{total}</span></p>
                <br /><br />

                <p>Affectation Mode à distance: <span>{affectations.filter(a => a.formateur_Matricule == formateur).length}</span></p>
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
                                            <td>{parseInt(formateur.module.MHSYN_S1+formateur.module.MHSYN_S2)}</td>
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
                                            <td>{parseInt(formateur.module.MHSYN_S1+formateur.module.MHSYN_S2)}</td>
                                        </tr>
                                    ))
                        }

                    </tbody>
                </table>
                <p>Total MH affectée à distance : <span>{totalsync}</span></p>

                <div>Total MH affectée à distance : {totalsync + total}</div>
            </div>

        </>
    )
}

export default ParFormateur

import React, { useContext, useState } from 'react'
import Navbar from './../../components/Navbar'
import { contextProvider } from '../../context/Context'

const ParGroupe = () => {

    const { groupes, filieres, filiereModules, affectations } = useContext(contextProvider)

    const [filiere, setFiliere] = useState()
    const [groupe, setGroupe] = useState()

    const handleChoisirFiliere = (e) => {
        setFiliere(e.target.value)
        setGroupe('')
    }

    return (
        <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Affecation des modules </h1>
                <div className="selectFiliere">
                    <div>
                        Filiere : <select onChange={handleChoisirFiliere}>
                            <option value="" disabled selected>Choisir Filiere</option>
                            {
                                filieres.map((filiere, index) => (
                                    <option value={filiere.Code_Filiere} key={index}>{filiere.Libelle_Filiere}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        Groupe : <select value={groupe} onChange={(e) => setGroupe(e.target.value)}>
                            <option value="" disabled selected>Choisir Groupe</option>
                            {
                                groupes.filter(e => e.Code_Filiere == filiere)
                                    .map((groupe, index) => (
                                        <option value={groupe.Code_Groupe} key={index}>{groupe.Code_Groupe}</option>
                                    ))
                            }
                        </select>
                    </div>
                </div>
                <p>Modules Affectes : <span>{affectations.filter(a=> a.Code_Groupe == groupe).length}</span></p>
                <table>
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
                        {
<<<<<<< HEAD
                            filiere ?
                                filiereModules.filter(e => e.Code_Filiere == filiere)
                                    .map((m, index) =>(
                                        <tr key={index}>
                                            <td>{m.module.Id_module}</td>
                                            <td>{m.module.code_module}</td>
                                            <td>{affectations.find(a => a.Id_module == m.module.Id_module).formateur.Nom_Formateur}</td>
                                            <td>{m.module.MHP_S1}</td>
                                            <td>{m.module.MHP_S2}</td>
                                            <td>{m.module.MHSYN_S1}</td>
                                            <td>{m.module.MHSYN_S2}</td>
                                            <td>{m.module.Coef}</td>
                                            <td>{m.module.EFM_Regional}</td>
                                        </tr>
                                    ))
                            :
                            filiereModules.map((m, index) =>(
                                        <tr key={index}>
                                            <td>{m.module.Id_module}</td>
                                            <td>{m.module.code_module}</td>
                                            <td>{affectations.find(a => a.Id_module == m.module.Id_module).formateur.Nom_Formateur}</td>
                                            <td>{m.module.MHP_S1}</td>
                                            <td>{m.module.MHP_S2}</td>
                                            <td>{m.module.MHSYN_S1}</td>
                                            <td>{m.module.MHSYN_S2}</td>
                                            <td>{m.module.Coef}</td>
                                            <td>{m.module.EFM_Regional}</td>
                                        </tr>
                                    ))
=======
                            filiereModules.filter(e=>e.Code_Filiere==filiere).map((m,index)=>
                                (
                                    <tr key={index}>
                                    <td>{m.module.Id_module}</td>
                                    <td>{m.module.code_module}</td>
                                    <td>{groupe ? affectations.find(a=>a.Id_module==m.module.Id_module && a.Code_Groupe == groupe)?.formateur.Nom_Formateur : "Choisir Un Groupe"}</td>
                                    <td>{m.module.MHP_S1}</td>
                                    <td>{m.module.MHP_S2}</td>
                                    <td>{m.module.MHSYN_S1}</td>
                                    <td>{m.module.MHSYN_S2}</td>
                                    <td>{m.module.Coef}</td>
                                    <td>{m.module.EFM_Regional}</td>
                                </tr>

                                ))
>>>>>>> 5b58fffb98a3c7c91676bd93b71e8782034ff39f
                        }

                    </tbody>
                </table>
                <p>Modules Non Affectes : <span>{affectations.filter(a=> a.Code_Groupe.includes(!groupe)).length}</span></p>
            </div>
        </>
    )
}

export default ParGroupe

import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context'

const ParGroupeModule = () => {
    const { groupes, filieres, filiereModules,modules,realisationMHT} = useContext(contextProvider)

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

                <table>
                    <thead>
                        <tr>
                            <th>Code Module</th>
                            <th>Module</th>
                            <th>MH G</th>
                            <th>MH P</th>
                            <th>MH SYNC</th>
                            <th>Réal G</th>
                            <th>Réal P</th>
                            <th>Réal D</th>
                            <th>% GI</th>
                            <th>% P</th>
                            <th>% D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                filiereModules.filter(e => e.Code_Filiere == filiere)
                                    .map((m, index) => (
                                        <tr key={index}>
                                            <td>{m.module.code_module}</td>
                                            <td>{m.module.Intitule_module}</td>
                                            <td>{m.module.MHT}</td>
                                            <td>{parseInt(m.module.MHP_S1) + parseInt(m.module.MHP_S2)}</td>
                                            <td>{parseInt(m.module.MHSYN_S1) + parseInt(m.module.MHSYN_S2)}</td>
<td>{groupe ? realisationMHT.find(r => r.Code_Groupe == groupe && r.Id_module == m.Id_module)?.somme : '--'}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    ))}

                    </tbody>
                </table>

            </div>
        </>
  )
}

export default ParGroupeModule

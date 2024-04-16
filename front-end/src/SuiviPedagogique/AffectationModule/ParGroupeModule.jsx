import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context'

const ParGroupeModule = () => {
    const { groupes, filieres, filiereModules,modules,realisationMHT} = useContext(contextProvider)

    const [filiere, setFiliere] = useState()
    const [groupe, setGroupe] = useState()

    const [afficherSelect, setAfficherSelect] = useState(false)
    const [afficherSelect1, setAfficherSelect1] = useState(false)
    const [searchFiliere, setSearchFiliere] = useState('')
    const [searchGroupe, setSearchGroupe] = useState('')

    const handleSelected = (filiere) => {
        setFiliere(filiere)
        setAfficherSelect(false)
        setGroupe('')
    }
    const handleSelected1 = (groupe) => {
        setGroupe(groupe)
        setAfficherSelect1(false)
    }

    const somme = (Id_module) => {
        const sommeG = realisationMHT.find(r => r.Code_Groupe == groupe.Code_Groupe && r.Id_module == Id_module)?.somme
        return sommeG
    }
    const sommeP = (Id_module) => {
        const sommeP = realisationMHT.find(r => r.Code_Groupe == groupe.Code_Groupe && r.Id_module == Id_module)?.sommeP
        return sommeP
    }
    const sommeD = (Id_module) => {
        const sommeD = realisationMHT.find(r => r.Code_Groupe == groupe.Code_Groupe && r.Id_module == Id_module)?.sommeD
        return sommeD
    }


  return (
    <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Affecation des modules </h1>
                <div className="choisir_inputs">
                    <div className="choisir_input_box3 select">
                        <p>Filiere</p>
                        <div onClick={() => setAfficherSelect(!afficherSelect)} className="select-btn1">
                            <span>{filiere ? filiere.Libelle_Filiere : "Selectioner un Filiere"}</span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchFiliere(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        filieres.map((e, index) => {
                                            if (e.Libelle_Filiere.toLowerCase().includes(searchFiliere.toLowerCase())) {
                                                return (
                                                    <li onClick={() => handleSelected(e)} key={index}>{e.Libelle_Filiere}</li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="choisir_input_box3 select">
                        <p>Groupe</p>
                        <div onClick={() => setAfficherSelect1(!afficherSelect1)} className="select-btn1">
                            <span>{groupe ? groupe.Code_Groupe : "Selectioner un Groupe"}</span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect1 &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchGroupe(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        filiere &&
                                        groupes.filter(e => e.Code_Filiere == filiere.Code_Filiere)
                                        .map((groupe, index) => {
                                            if (groupe.Code_Filiere.toLowerCase().includes(searchGroupe.toLowerCase())) {
                                                return (
                                                    <li onClick={() => handleSelected1(groupe)} key={index}>{groupe.Code_Groupe}</li>
                                                )
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        }
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
                            filiere &&
                                filiereModules.filter(e => e.Code_Filiere == filiere.Code_Filiere)
                                    .map((m, index) => (
                                        <tr key={index}>
                                            <td>{m.module.code_module}</td>
                                            <td>{m.module.Intitule_module}</td>
                                            <td>{m.module.MHT}</td>
    <td>{parseInt(m.module.MHP_S1) + parseInt(m.module.MHP_S2)}</td>
    <td>{parseInt(m.module.MHSYN_S1) + parseInt(m.module.MHSYN_S2)}</td>
<td>{somme(m.Id_module)} </td>
<td>{sommeP(m.Id_module)} </td>
<td>{sommeD(m.Id_module)} </td>
<td>{somme(m.Id_module) > 0 ? Math.round(somme(m.Id_module) / m.module.MHT * 100) : 0} %</td>
<td>{sommeP(m.Id_module) > 0 ? Math.round(sommeP(m.Id_module) / (parseInt(m.module.MHP_S1) + parseInt(m.module.MHP_S2)) * 100) : 0} %</td>
<td>{sommeD(m.Id_module) > 0 ? Math.round(sommeD(m.Id_module) / (parseInt(m.module.MHSYN_S1) + parseInt(m.module.MHSYN_S2)) * 100) : 0} %</td>

                                        </tr>
                                    ))}

                    </tbody>
                </table>

            </div>
        </>
  )
}

export default ParGroupeModule

import React from 'react'
import { useContext } from 'react'
import { contextProvider } from '../../context/Context'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'


const ModuleNonAffectees = () => {
    const { affectations, filiereModules } = useContext(contextProvider);

    return (
        <Layout content={
            <div class="contentDashboard">
                <div className='parGroupe'>
                    <h1>Module Non Affectées</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Filiére</th>
                                <th>Groupe</th>
                                <th>Code Module</th>
                                <th>Intitulé Module</th>
                                <th>MH Totale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                affectations.filter((e) => !e.formateur_Matricule)
                                    .map((j, index) => (
                                        <tr key={index}>
                                            <td>{filiereModules.find((k) => k.Id_module == j.Id_module).Code_Filiere}</td>
                                            <td>{j.Code_Groupe}</td>
                                            <td>{j.module.code_module}</td>
                                            <td>{j.module.Intitule_module}</td>
                                            <td>{j.module.MHT}</td>
                                        </tr>
                                    ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        }
        />
    )
}

export default ModuleNonAffectees

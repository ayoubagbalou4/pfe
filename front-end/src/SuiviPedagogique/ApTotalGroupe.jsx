import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { contextProvider } from '../context/Context'

const ApTotalGroupe = () => {
    const {filiereModules, affectations , groupes, seances}=useContext(contextProvider)
    const mhDriff = (Code_Filiere)=>{
        const filiereModule = filiereModules.filter(e=>e.Code_Filiere == Code_Filiere )
        let somme = 0
        filiereModule.map(e=>{
            somme+= parseInt(e.module.MHT)
        })
        return somme
    }
    const mhMetier = (groupe) => {
        const filiereModule = seances.filter(e => e.Code_Groupe == groupe);
        let somme = 0;

        filiereModule.forEach(mod => {
            if (mod.module && mod.module.code_module && mod.module.code_module.startsWith("M")) {
                somme += parseFloat(mod.MH);
            }
        });

        return somme;
    };

    const mhEG = (groupe) => {
        const filiereModule = seances.filter(e => e.Code_Groupe == groupe);
        let somme = 0;

        filiereModule.forEach(mod => {
            if (mod.module && mod.module.code_module && mod.module.code_module.startsWith("EG")) {
                somme += parseFloat(mod.MH);
            }
        });

        return somme;
    };

  return (
    <>
    <Navbar />
    <div className='parGroupe'>
        <h1>Ap Totale Par Groupe </h1>
        <table>
            <thead>
                <tr>
                    <th> Code Filiere</th>
                    <th>Annee Formation</th>
                    <th>Groupe</th>
                    <th>MH(MH_p + MH_SYNC)</th>
                    <th>MH Réaliser Métier</th>
                    <th>MH Réaliser EG</th>
                    <th>MH Réaliser Globale</th>
                    <th>Taux d'Ap</th>

                </tr>
            </thead>
            <tbody>
                {

                        groupes.map((groupe, index) =>(
                                <tr key={index}>

                                    <td>{groupe.Code_Filiere}</td>
                                    <td>{filiereModules.find(e=>e.Code_Filiere == groupe.Code_Filiere )?.module.annee}</td>
                                    <td>{groupe.Code_Groupe }</td>
                                    <td>{mhDriff(groupe.Code_Filiere)}</td>
                                    <td>{mhMetier(groupe.Code_Groupe)}</td>
                                    <td>{mhEG(groupe.Code_Groupe)}</td>
                                    <td>{mhMetier(groupe.Code_Groupe)+ mhEG(groupe.Code_Groupe)}</td>
                                    <td>{Math.round(mhMetier(groupe.Code_Groupe)/ mhDriff(groupe.Code_Filiere)*100)}%</td>

                                </tr>
                            ))
                }

            </tbody>
        </table>


    </div>

</>
  )
}

export default ApTotalGroupe

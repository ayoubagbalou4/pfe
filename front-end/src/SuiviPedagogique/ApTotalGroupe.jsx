import React from 'react'
import Navbar from '../components/Navbar'
import { useContext } from 'react'
import { contextProvider } from '../context/Context'
import Layout from '../components/Layout'
import * as XLSX from 'xlsx';

const ApTotalGroupe = () => {
    const { filiereModules, affectations, groupes, seances } = useContext(contextProvider)
    const mhDriff = (Code_Filiere) => {
        const filiereModule = filiereModules.filter(e => e.Code_Filiere == Code_Filiere)
        let somme = 0
        filiereModule.map(e => {
            somme += parseInt(e.module.MHT)
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

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(groupes.map(groupe => ({
            'Code Filiere': groupe.Code_Filiere,
            'Annee Formation': filiereModules.find(e => e.Code_Filiere == groupe.Code_Filiere)?.module.annee,
            'Groupe': groupe.Code_Groupe,
            'MH(MH_p + MH_SYNC)': mhDriff(groupe.Code_Filiere),
            'MH Réaliser Métier': mhMetier(groupe.Code_Groupe),
            'MH Réaliser EG': mhEG(groupe.Code_Groupe),
            'MH Réaliser Globale': mhMetier(groupe.Code_Groupe) + mhEG(groupe.Code_Groupe),
            'Taux d\'Ap': Math.round(mhMetier(groupe.Code_Groupe) / mhDriff(groupe.Code_Filiere) * 100) + '%'
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'AP Totale Par Groupe');
        XLSX.writeFile(workbook, 'AP_Totale_Par_Groupe.xlsx');
    };

    return (
        <Layout header={"Ap Totale Par Groupe"} ApTotaleGroupe={"active"} content={
            <div class="contentDashboard">
                <div className='parGroupe'>
                    <h1>Ap Totale Par Groupe </h1>
                    <button className='btnDownload' onClick={exportToExcel}><i class="fa-solid fa-file-csv"></i>  Export to Excel</button>
                    <table className='apTable'>
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

                                groupes.map((groupe, index) => (
                                    <tr key={index}>

                                        <td>{groupe.Code_Filiere}</td>
                                        <td>{filiereModules.find(e => e.Code_Filiere == groupe.Code_Filiere)?.module.annee}</td>
                                        <td>{groupe.Code_Groupe}</td>
                                        <td>{mhDriff(groupe.Code_Filiere)}</td>
                                        <td>{mhMetier(groupe.Code_Groupe)}</td>
                                        <td>{mhEG(groupe.Code_Groupe)}</td>
                                        <td>{mhMetier(groupe.Code_Groupe) + mhEG(groupe.Code_Groupe)}</td>
                                        <td>{Math.round(mhMetier(groupe.Code_Groupe) / mhDriff(groupe.Code_Filiere) * 100)}%</td>

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

export default ApTotalGroupe

import React, { useContext, useEffect } from 'react'
import { contextProvider } from '../../context/Context'
import Layout from '../../components/Layout';
import Loader from '../../components/Loader';
import * as XLSX from 'xlsx';

const MHaffForateur = () => {
    const { formateurs, affectations, loadingFormateurs, loadingAffectations } = useContext(contextProvider)
    const handelMHT = (e) => {
        let total = 0;
        affectations.filter(f => f.formateur_Matricule === e).map((affectation) => {
            let t = parseInt(affectation.module.MHT);
            total += t;
        });
        return total;
    };
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(formateurs.map(formateur => ({
            'Matricule': formateur.Matricule,
            'Formateur': formateur.Nom_Formateur,
            'MH Statutaire Annuelle': 910,
            'MH Affectéé': handelMHT(formateur.Matricule),
            'Ecart': handelMHT(formateur.Matricule) - 910,

        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'MH affectees aux formateurs');
        XLSX.writeFile(workbook, 'MH_affectees_aux_formateurs.xlsx');
    };
    return (
        <Layout header={"Masse horaire affectées aux formateurs"} SuiviPédagogique={"active"} content={
            <>
                <div class="contentDashboard">
                    <div className='parGroupe'>
                        <h1>Masse horaire affectées aux formateurs</h1>
                        <button className='btnDownload' onClick={exportToExcel}><i class="fa-solid fa-file-csv"></i>  Export to Excel</button>

                        {

                        loadingFormateurs || loadingAffectations ?
                                <Loader /> :
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Matricule</th>
                                            <th>Formateur</th>
                                            <th>MH Statutaire Annuelle</th>
                                            <th>MH Affectéé</th>
                                            <th>Ecart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            formateurs.map((j, index) => (
                                                <tr key={index}>
                                                    <td>{j.Matricule}</td>
                                                    <td>{j.Nom_Formateur}</td>
                                                    <td>910</td>
                                                    <td>{handelMHT(j.Matricule)}</td>
                                                    <td className='redEcart'>{handelMHT(j.Matricule) - 910}</td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                        }
                    </div>
                </div>
            </>

        }
        />
    )
}

export default MHaffForateur

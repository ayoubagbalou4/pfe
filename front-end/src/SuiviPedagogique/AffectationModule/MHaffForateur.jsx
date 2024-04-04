import React, { useContext, useEffect } from 'react'
import { contextProvider } from '../../context/Context'
import Navbar from '../../components/Navbar'

const MHaffForateur = () => {
    const {formateurs,affectations} = useContext(contextProvider)
    const handelMHT = (e) => {
        let total = 0;
        affectations.filter(f => f.formateur_Matricule === e).map((affectation) => {
            let t = parseInt(affectation.module.MHT);
            total += t;
        });
        return total;
    };
  return (
    <>
    <Navbar/>
    <div className='parGroupe'>
    <h1>Masse horaire affectées aux formateurs</h1>
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
                            <td>{ j.Nom_Formateur}</td>
                            <td>910</td>
                            <td>{handelMHT(j.Matricule)}</td>
                            <td className='redEcart'>{handelMHT(j.Matricule) - 910}</td>
                        </tr>
                    ))
            }

        </tbody>
    </table>
    </div>
</>
  )
}

export default MHaffForateur

import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context';

const RealisationFormateurParSemaine = () => {

    const {formateurs,seances} = useContext(contextProvider);

    console.log(seances)

    const [seamine,setSemaine] = useState()

    const calculeMHHebdo = (formateur) => {
        let count = 0
        seances.filter(seance => seance.formateur_Matricule == formateur && seance.No_Semaine_Calendrier == seamine)
        .map(e => {
            count += e.MH
        })
        return count
    }


    return (
        <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Réalisation des formateurs Réalisation Par semaine</h1>
                No Semaine Calendrier : <select onChange={(e)=>setSemaine(e.target.value)} name="" id="">
                    <option value="">Choisir La Semaine</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                </select>
                {seamine && <h3>No Semaine Calendrier : {seamine}</h3>}
                <table>
                    <thead>
                        <tr>
                            <th>Matricule</th>
                            <th>Formateur</th>
                            <th>MH Hebdo -S </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formateurs.map((formateur) => (
                                <tr>
                                    <td>{formateur.Matricule}</td>
                                    <td>{formateur.Nom_Formateur}</td>
                                    <td>{calculeMHHebdo(formateur.Matricule)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default RealisationFormateurParSemaine

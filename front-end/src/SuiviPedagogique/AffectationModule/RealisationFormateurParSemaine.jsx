import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context';

const RealisationFormateurParSemaine = () => {

    const {formateurs,seances,semaines} = useContext(contextProvider);

    console.log(seances)

    const [semaine,setSemaine] = useState()

    const calculeMHHebdo = (formateur) => {
        let count = 0
        seances.filter(seance => seance.formateur_Matricule == formateur && seance.No_Semaine_Calendrier == semaine)
        .map(e => {
            count += e.MH
        })
        return count
    }

    console.log(semaines)

    return (
        <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Réalisation des formateurs Réalisation Par semaine</h1>
                No Semaine Calendrier : <select onChange={(e)=>setSemaine(e.target.value)} name="" id="">
                    <option value="">Choisir La Semaine</option>
                    {
                        semaines.map(s => (
                            <option value={s.semaine}>S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek}) </option>
                        ))
                    }
                </select>
                {semaine && <h3>No Semaine Calendrier : {semaine}</h3>}
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

import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context';

const RealisationFormateurParSemaine = () => {

    const { formateurs, seances, semaines } = useContext(contextProvider);

    console.log(seances)

    const [semaine, setSemaine] = useState()
    const [afficherSelect, setAfficherSelect] = useState(false)
    const [searchSemaine, setSearchSemaine] = useState('')


    const calculeMHHebdo = (formateur) => {
        let count = 0
        seances.filter(seance => seance.formateur_Matricule == formateur && seance.No_Semaine_Calendrier == semaine)
            .map(e => {
                count += e.MH
            })
        return count
    }

    const handleSelected = (semaine) => {
        setSemaine(semaine)
        setAfficherSelect(false)
    }


    return (
        <>
            <Navbar />
            <div className='parGroupe'>
                <h1>Réalisation des formateurs Réalisation Par semaine</h1>
                <div className="choisir_inputs two">
                    <div className="choisir_input_box3 select">
                        <p>No Semaine Calendrier</p>
                        <div onClick={() => setAfficherSelect(!afficherSelect)} className="select-btn1">
                            <span>{semaine ? semaine : "Selectioner un Semaine"}</span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchSemaine(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        semaines.map((s, index) => (
                                            <li onClick={() => handleSelected(s.semaine)} key={index}>
                                                S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek})
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>

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

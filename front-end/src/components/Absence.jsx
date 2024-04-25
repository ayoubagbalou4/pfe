import React, { useContext, useState } from 'react'
import { contextProvider } from '../context/Context'
import Loader from './Loader';
import Layout from './Layout';

const Absence = () => {
    const { absence, semaines, setNSemaine ,loadingAbsence } = useContext(contextProvider);
    const [semaine, setSemaine] = useState()
    const [afficherSelect0, setAfficherSelect0] = useState(false)
    const [searchSemaine, setSearchSemaine] = useState('')

    const handleSelected0 = (semaine) => {
        setSemaine(semaine)
        setAfficherSelect0(false)
        setNSemaine(semaine.semaine)
    }

    return (
        <Layout header={"Absences"} Absences={"active"} content={
            <div class="contentDashboard">
            <div className='parGroupe'>
                <h1>Absence des formateurs</h1>
                <div className="choisir_inputs two">
                    <div className="choisir_input_box3 select">
                        <p>No Semaine Calendrier</p>
                        <div onClick={() => setAfficherSelect0(!afficherSelect0)} className="select-btn1">
                            <span>{semaine ? `S - ${semaine.semaine} (${semaine.firstDayOfWeek} - ${semaine.lastDayOfWeek}` : "Chosir la semaine pour elaborer son tableau"}</span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect0 &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setSearchSemaine(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        semaines.map((s, index) => (
                                            <li onClick={() => handleSelected0(s)} key={index}>
                                                S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek})
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                {
                    loadingAbsence ? <Loader />
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>Formateur</th>
                                    <th>Jour</th>
                                    <th>Date</th>
                                    <th>Justification</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    absence.map((absence) => (
                                        <tr>
                                            <td>{absence.formateur?.Nom_Formateur}</td>
                                            <td>{absence.jour}</td>
                                            <td>{absence.date}</td>
                                            <td>{absence.justification}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                }
            </div>
            </div>
        }
    />

    )
}

export default Absence

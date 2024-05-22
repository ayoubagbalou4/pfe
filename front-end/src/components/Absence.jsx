import React, { useContext, useEffect, useState } from 'react'
import { contextProvider } from '../context/Context'
import Loader from './Loader';
import Layout from './Layout';
import axios from 'axios';
import * as XLSX from 'xlsx';

const Absence = () => {

    const [semaines, setSemaines] = useState([])
    const [loadingSemaines, setLoadingSemaines] = useState([])
    const getSemaines = async () => {
        setLoadingSemaines(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/semaines')
            setSemaines(response.data.semaines)
            setLoadingSemaines(false)
        } catch (error) {
            console.log(error)
            setLoadingSemaines(false)
        }
    }
    useEffect(() => {
        getSemaines()
    }, [])

    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = String(dateNow.getMonth() + 1).padStart(2, '0');
    const day = String(dateNow.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const currentSemaine = semaines.find(s => s.firstDayOfWeek <= formattedDate && s.lastDayOfWeek >= formattedDate)?.semaine

    const [nSemaine, setNSemaine] = useState(currentSemaine)

    const [semaine, setSemaine] = useState()
    const [afficherSelect0, setAfficherSelect0] = useState(false)
    const [searchSemaine, setSearchSemaine] = useState('')

    const handleSelected0 = (semaine) => {
        setSemaine(semaine)
        setAfficherSelect0(false)
        setNSemaine(semaine.semaine)
    }

    const [absence, setAbsence] = useState([])
    const [loadingAbsence, setLoadingAbsence] = useState([])
    const getAbsence = async () => {
        setLoadingAbsence(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/absences/${nSemaine}`)
            setAbsence(response.data.absences)
            setLoadingAbsence(false)
        } catch (error) {
            console.log(error)
            setLoadingAbsence(false)
        }
    }
    useEffect(() => {
        getAbsence()
    }, [nSemaine])

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(absence.map((absence) => ({
            'Formateur': absence.formateur?.Nom_Formateur,
            'Jour': absence.jour,
            'Date': absence.date,
            'Seance': absence.codeSeance,
            'Justification': absence.justification
        })));

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Absence des formateurs');
        XLSX.writeFile(workbook, 'Absence_des_formateurs.xlsx');
    };


    return (
        <Layout header={"Absences"} Absences={"active"} content={
            <div class="contentDashboard">
                <div className='parGroupe'>
                    <h1>Absence des formateurs</h1>
                    <button className='btnDownload' onClick={exportToExcel}><i class="fa-solid fa-file-csv"></i>  Export to Excel</button>
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
                                        <th>Seance</th>
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
                                                <td>{absence.codeSeance}</td>
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

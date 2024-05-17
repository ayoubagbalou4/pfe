import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'


export const contextProvider = createContext(null)

const Context = ({ children }) => {

    const [formateurs, setFormateurs] = useState([])
    const [loadingFormateurs, setLoadingFormateurs] = useState(false)
    const getFormateurs = async () => {
        setLoadingFormateurs(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/formateurs')
            setFormateurs(response.data.formateurs)
            setLoadingFormateurs(false)
        } catch (error) {
            console.log(error)
            setLoadingFormateurs(false)
        }
    }
    useEffect(() => {
        getFormateurs()
    }, [])
    const [salles, setSalles] = useState([])
    const [loadingSalles, setLoadingSalles] = useState([])
    const getSalles = async () => {
        setLoadingSalles(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/salles')
            setSalles(response.data.salles)
            setLoadingSalles(false)
        } catch (error) {
            console.log(error)
            setLoadingSalles(false)
        }
    }
    useEffect(() => {
        getSalles()
    }, [])
    const [affectations, setAffectations] = useState([])
    const [loadingAffectations, setLoadingAffectations] = useState([])
    const getAffectations = async () => {
        setLoadingAffectations(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/affectations')
            setAffectations(response.data.affectations)
            setLoadingAffectations(false)
        } catch (error) {
            console.log(error)
            setLoadingAffectations(false)
        }
    }
    useEffect(() => {
        getAffectations()
    }, [])

    const [groupes, setGroupes] = useState([])
    const [loadingGroupes, setLoadingGroupes] = useState([])
    const getGroupes = async () => {
        setLoadingGroupes(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/groupes')
            setGroupes(response.data.groupes)
            setLoadingGroupes(false)
        } catch (error) {
            console.log(error)
            setLoadingGroupes(false)
        }
    }
    useEffect(() => {
        getGroupes()
    }, [])

    const [filieres, setFilieres] = useState([])
    const [loadingFilieres, setLoadingFilieres] = useState([])
    const getFilieres = async () => {
        setLoadingFilieres(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/filieres')
            setFilieres(response.data.filieres)
            setLoadingFilieres(false)
        } catch (error) {
            console.log(error)
            setLoadingFilieres(false)
        }
    }
    useEffect(() => {
        getFilieres()
    }, [])

    const [filiereModules, setFiliereModules] = useState([])
    const [loadingFiliereModules, setLoadingFiliereModules] = useState([])
    const getFiliereModules = async () => {
        setLoadingFiliereModules(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/filiereModules')
            setFiliereModules(response.data.filiereModules)
            setLoadingFiliereModules(false)
        } catch (error) {
            console.log(error)
            setLoadingFiliereModules(false)
        }
    }
    useEffect(() => {
        getFiliereModules()
    }, [])

    const [seances, setSeances] = useState([])
    const [loadingSeances, setLoadingSeances] = useState([])
    const getSeances = async () => {
        setLoadingSeances(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/seances')
            setSeances(response.data.seances)
            setLoadingSeances(false)
        } catch (error) {
            console.log(error)
            setLoadingSeances(false)
        }
    }
    useEffect(() => {
        getSeances()
    }, [])

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


    const [nSemaine, setNSemaine] = useState()
    const getSemainesNow = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getSemaineNow')
            setNSemaine(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSemainesNow()
    }, [])

    const [seancesParSemaine, setSeancesParSemaine] = useState([])
    const [loadingSeancesParSemaine, setLoadingSeancesParSemaine] = useState(false)
    const getSeancesParSemaine = async () => {
        setLoadingSeancesParSemaine(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/seancesParSemaine/${nSemaine}`)
            setSeancesParSemaine(response.data.seancesParSemaine)
            setLoadingSeancesParSemaine(false)
        } catch (error) {
            console.log(error)
            setLoadingSeancesParSemaine(false)
        }
    }
    useEffect(() => {
        getSeancesParSemaine()
    }, [nSemaine])



    const [modules, setModules] = useState([])
    const [loadingModules, setLoadingModules] = useState([])
    const getmodules = async () => {
        setLoadingModules(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/modules')
            setModules(response.data.modules)
            setLoadingModules(false)
        } catch (error) {
            console.log(error)
            setLoadingModules(false)
        }
    }
    useEffect(() => {
        getmodules()
    }, [])

    const [realisationMHT, setrealisationMHT] = useState([])
    const [loadingrealisationMHT, setLoadingrealisationMHT] = useState([])
    const getrealisationMHT = async () => {
        setLoadingrealisationMHT(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/realisationModulesParGrp')
            setrealisationMHT(response.data.realisationModulesParGrp)
            setLoadingrealisationMHT(false)
        } catch (error) {
            console.log(error)
            setLoadingrealisationMHT(false)
        }
    }
    useEffect(() => {
        getrealisationMHT()
    }, [])

    const [semaineNumber, setSemaineNumber] = useState([])
    const [loadingSemaineNumber, setLoadingSemaineNumber] = useState([])
    const getsemaineNumber = async () => {
        setLoadingSemaineNumber(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/semaineNumber')
            setSemaineNumber(response.data.semaineNumber)
            setLoadingSemaineNumber(false)
        } catch (error) {
            console.log(error)
            setLoadingSemaineNumber(false)
        }
    }
    useEffect(() => {
        getsemaineNumber()
    }, [])


    const [statistiquesF, setStatistiquesF] = useState([])
    const [loadingStatistiquesF, setLoadingStatistiquesF] = useState([])
    const getStatistiquesF = async () => {
        setLoadingStatistiquesF(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/formateurStatistiques/${nSemaine}`)
            setStatistiquesF(response.data.Seancesformateur)
            setLoadingStatistiquesF(false)
        } catch (error) {
            console.log(error)
            setLoadingStatistiquesF(false)
        }
    }
    useEffect(() => {
        getStatistiquesF()
    }, [nSemaine])
    const [statistiquesG, setstatistiquesG] = useState([])
    const [loadingstatistiquesG, setLoadingstatistiquesG] = useState([])
    const getstatistiquesG = async () => {
        setLoadingstatistiquesG(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/groupeStatistiques/${nSemaine}`)
            setstatistiquesG(response.data.Seancesgroupe)
            setLoadingstatistiquesG(false)
        } catch (error) {
            console.log(error)
            setLoadingstatistiquesG(false)
        }
    }
    useEffect(() => {
        getstatistiquesG()
    }, [nSemaine])
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

    const [seanceGenerate, setSeanceGenerate] = useState({})

    const values = {
        formateurs, salles, affectations, groupes, filieres, filiereModules, seances,
        setSeances, semaines, modules, realisationMHT, semaineNumber, seancesParSemaine, setSeancesParSemaine,
        seanceGenerate, setSeanceGenerate, setNSemaine, getSeancesParSemaine,
        loadingSeancesParSemaine, nSemaine, statistiquesF, statistiquesG, absence, loadingAbsence, loadingSalles, loadingAffectations, loadingFormateurs
    }
    return (
        <contextProvider.Provider value={values}>
            {children}
        </contextProvider.Provider>
    )
}

export default Context

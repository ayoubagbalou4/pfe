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

    const [filiereModules,setFiliereModules] = useState([])
    const [loadingFiliereModules,setLoadingFiliereModules] = useState([])
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
    } ,[])

    const [seances,setSeances] = useState([])
    const [loadingSeances,setLoadingSeances] = useState([])
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
    } ,[])

    const [semaines,setsemaines] = useState([])
    const [loadingsemaines,setLoadingsemaines] = useState([])
    const getsemaines = async () => {
        setLoadingsemaines(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/seanceParDate')
            setsemaines(response.data.seanceParDate)
            setLoadingsemaines(false)
        } catch (error) {
            console.log(error)
            setLoadingsemaines(false)
        }
    }
    useEffect(() => {
        getsemaines()
    } ,[])

    const [modules,setModules] = useState([])
    const [loadingModules,setLoadingModules] = useState([])
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
    } ,[])
    const [realisationMHT,setrealisationMHT] = useState([])
    const [loadingrealisationMHT,setLoadingrealisationMHT] = useState([])
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
    } ,[])



    const values = { formateurs, salles, affectations , groupes , filieres,filiereModules,seances ,semaines, modules,realisationMHT}
    return (
        <contextProvider.Provider value={values}>
            {children}
        </contextProvider.Provider>
    )
}

export default Context
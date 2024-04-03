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

    const values = { formateurs, salles, affectations , groupes , filieres,filiereModules }
    return (
        <contextProvider.Provider value={values}>
            {children}
        </contextProvider.Provider>
    )
}

export default Context

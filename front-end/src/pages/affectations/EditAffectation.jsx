import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { contextProvider } from '../../context/Context'
import Navbar from '../../components/Navbar'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'

const EditAffectation = () => {

    const { formateurs, groupes, modules } = useContext(contextProvider);

    const { Code_Groupe, Id_module, formateur_Matricule } = useParams()
    const navigate = useNavigate()

    const [loadingGetSingleAffectation, setLoadingGetSingleAffectation] = useState(false)
    const [affectationsData, setAffectationsData] = useState({})
    const handleAffectation = (e) => {
        setAffectationsData({ ...affectationsData, [e.target.name]: e.target.value })
    }

    const getSingleAffectation = async () => {
        setLoadingGetSingleAffectation(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/affectations/${Code_Groupe}/${Id_module}/${formateur_Matricule}`)
            setAffectationsData(response.data.affectation)
            setLoadingGetSingleAffectation(false)
        } catch (error) {
            console.log(error)
            setLoadingGetSingleAffectation(false)
        }
    }

    useEffect(() => {
        getSingleAffectation()
    }, [])

    const [loadingEditAffectation, setLoadingEditAffectation] = useState(false)
    const editAffectation = async (e) => {
        e.preventDefault()
        setLoadingEditAffectation(true)
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/affectations/${Code_Groupe}/${Id_module}/${formateur_Matricule}`, affectationsData)
            setLoadingEditAffectation(false)
            navigate('/affectations')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Edit affectation With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Cette Affectation Est Deja Exist",
            });
            console.log(error)
            setLoadingEditAffectation(false)
        }
    }

    return (
        <Layout content={
            <div class="contentDashboard">
                <div class="formAdmin">
                    <h1>Edit Affectation</h1>
                    {loadingGetSingleAffectation ? <Loader /> :
                        <>
                            <form onSubmit={editAffectation}>
                                <div>
                                    <p>Code Groupe</p>
                                    <select value={affectationsData.Code_Groupe} onChange={handleAffectation} name='Code_Groupe' required>
                                        <option value="" key="" selected disabled>Choisir Groupe</option>
                                        {
                                            groupes.map((groupe, index) => (
                                                <option value={groupe.Code_Groupe} key={index}>{groupe.Code_Groupe}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <p>module</p>
                                    <select value={affectationsData.Id_module} onChange={handleAffectation} name='Id_module' required>
                                        <option value="" key="" selected disabled>Choisir module</option>
                                        {
                                            modules.map((module, index) => (
                                                <option value={module.Id_module} key={index}>{module.Id_module} ({module.Intitule_module})</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div>
                                    <p>formateur Matricule</p>
                                    <select value={affectationsData.formateur_Matricule} onChange={handleAffectation} name='formateur_Matricule' required>
                                        <option value="" key="" selected disabled>Choisir formateur</option>
                                        {
                                            formateurs.map((formateur, index) => (
                                                <option value={formateur.Matricule} key={index}>{formateur.Nom_Formateur}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {
                                    !loadingEditAffectation &&
                                    <button>Edit Affectation</button>
                                }
                            </form>
                            {loadingEditAffectation && <div className='singleLoader'><span class="loader"></span></div>}
                        </>
                    }
                </div>
            </div>
        }
        />
    )
}

export default EditAffectation

import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { contextProvider } from '../../context/Context'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'

const AjouterAffectation = () => {

    const { formateurs, groupes, modules } = useContext(contextProvider);


    const navigate = useNavigate()
    const [loadingAddAffectation, setLoadingAddAffectation] = useState(false)
    const [affectationsData, setAffectationsData] = useState({})
    const handleAffectation = (e) => {
        setAffectationsData({ ...affectationsData, [e.target.name]: e.target.value })
    }

    const addAffectation = async (e) => {
        e.preventDefault()
        setLoadingAddAffectation(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/affectations', affectationsData)
            setLoadingAddAffectation(false)
            navigate('/affectations')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Add affectation With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Cette Affectation Est Deja Exist",
            });
            console.log(error)
            setLoadingAddAffectation(false)
        }
    }

    return (
        <div>
            <Layout affectations="active" content={
                <div class="contentDashboard">
                    <div class="formAdmin">
                        <h1>Ajouter Affectation</h1>
                        <form onSubmit={addAffectation}>
                            <div>
                                <p>Code Groupe</p>
                                <select onChange={handleAffectation} name='Code_Groupe' required>
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
                                <select onChange={handleAffectation} name='Id_module' required>
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
                                <select onChange={handleAffectation} name='formateur_Matricule' required>
                                    <option value="" key="" selected disabled>Choisir formateur</option>
                                    {
                                        formateurs.map((formateur, index) => (
                                            <option value={formateur.Matricule} key={index}>{formateur.Nom_Formateur}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                !loadingAddAffectation &&
                                <button>Add Affectation</button>
                            }
                        </form>

                        {loadingAddAffectation && <div className='singleLoader'><span class="loader"></span></div>}
                    </div>
                </div>
            } />
        </div>
    )
}

export default AjouterAffectation


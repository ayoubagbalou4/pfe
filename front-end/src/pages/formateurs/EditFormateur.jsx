import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Navbar from '../../components/Navbar'
import Loader from '../../components/Loader'
import { contextProvider } from '../../context/Context'
import Layout from '../../components/Layout'

const EditFormateur = () => {

    const { salles } = useContext(contextProvider);

    const { matricule } = useParams()
    const navigate = useNavigate()

    const [loadingGetSingleFormateur, setLoadingGetSingleFormateur] = useState(false)
    const [formateursData, setFormateursData] = useState({})
    const handleFormateur = (e) => {
        setFormateursData({ ...formateursData, [e.target.name]: e.target.value })
    }

    const getSingleFormateur = async () => {
        setLoadingGetSingleFormateur(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/formateurs/${matricule}`)
            setFormateursData(response.data.formateur)
            setLoadingGetSingleFormateur(false)
        } catch (error) {
            console.log(error)
            setLoadingGetSingleFormateur(false)
        }
    }
    useEffect(() => {
        getSingleFormateur()
    }, [])

    const [loadingEditFormateur, setLoadingEditFormateur] = useState(false)
    const editFormateur = async (e) => {
        e.preventDefault()
        setLoadingEditFormateur(true)
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/formateurs/${matricule}`, formateursData)
            setLoadingEditFormateur(false)
            navigate('/formateurs')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Edit formateur With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
            setLoadingEditFormateur(false)
        }
    }

    return (

           <Layout content={

                    <div class="contentDashboard">
            <div class="formAdmin">
                <h1>Edit Formateur</h1>
                {loadingGetSingleFormateur ? <Loader /> :
                <>
                    <form onSubmit={editFormateur}>
                        <div>
                            <p>Matricule</p>
                            <input value={formateursData.Matricule} onChange={handleFormateur} name='Matricule' type="text" placeholder="Matricule" required />
                        </div>
                        <div>
                            <p>Nom Formateur</p>
                            <input value={formateursData.Nom_Formateur} onChange={handleFormateur} name='Nom_Formateur' type="text" placeholder="Nom Formateur" required />
                        </div>
                        <div>
                            <p>Abreviation</p>
                            <input value={formateursData.Abreviation} onChange={handleFormateur} name='Abreviation' type="text" placeholder="Abreviation" required />
                        </div>
                        <div>
                            <p>Telephone</p>
                            <input value={formateursData.Telephone} onChange={handleFormateur} name='Telephone' type="text" placeholder="Telephone" required />
                        </div>
                        <div>
                            <p>MH_Statutaire</p>
                            <input value={formateursData.MH_Statutaire} onChange={handleFormateur} name='MH_Statutaire' type="text" placeholder="MH_Statutaire" required />
                        </div>
                        <div>
                            <p>Statut</p>
                            <input value={formateursData.Statut} onChange={handleFormateur} name='Statut' type="text" placeholder="Statut" required />
                        </div>
                        <div>
                            <p>Affectation</p>
                            <input value={formateursData.Affectation} onChange={handleFormateur} name='Affectation' type="text" placeholder="Affectation" required />
                        </div>
                        <div>
                            <p>Mutualise</p>
                            <input value={formateursData.Mutualise} onChange={handleFormateur} name='Mutualise' type="text" placeholder="Mutualise" required />
                        </div>
                        <div>
                            <p>EFP mutualise</p>
                            <input value={formateursData.EFP_mutualise} onChange={handleFormateur} name='EFP_mutualise' type="text" placeholder="EFP mutualise" required />
                        </div>
                        <div>
                            <p>Email</p>
                            <input value={formateursData.Email} onChange={handleFormateur} name='Email' type="text" placeholder="Email" required />
                        </div>
                        <div>
                            <p>Id Salle</p>
                            <select value={formateursData.Id_Salle} onChange={handleFormateur} name='Id_Salle' required>
                                <option value="" key="">Choisir Salle</option>
                                {
                                    salles.map((salle, index) => (
                                        <option value={salle.Id_Salle} key={index}>{salle.Id_Salle}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <p>Color</p>
                            <input value={formateursData.Color} onChange={handleFormateur} name='Color' type="text" placeholder="Color" required />
                        </div>
                        <div>
                            <p>Background Color</p>
                            <input value={formateursData.Background_Color} onChange={handleFormateur} name='Background_Color' type="text" placeholder="Background Color" required />
                        </div>
                        {
                            !loadingEditFormateur && <button>Edit Formateur</button>
                        }
                    </form>
                    { loadingEditFormateur && <div className='singleLoader'><span class="loader"></span></div> }
                    </>
                }
            </div>

                    </div>
                }
            />

    )
}

export default EditFormateur


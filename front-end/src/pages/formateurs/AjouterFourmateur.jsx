import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Navbar from '../../components/Navbar'
import { contextProvider } from '../../context/Context'
import Layout from '../../components/Layout'

const AjouterFourmateur = () => {

    const { salles } = useContext(contextProvider);

    const navigate = useNavigate()
    const [loadingAddFormateur, setLoadingAddFormateur] = useState(false)
    const [formateursData, setFormateursData] = useState({})
    const handleFormateur = (e) => {
        setFormateursData({ ...formateursData, [e.target.name]: e.target.value })
    }

    const addFormateur = async (e) => {
        e.preventDefault()
        setLoadingAddFormateur(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/formateurs', formateursData)
            setLoadingAddFormateur(false)
            navigate('/formateurs')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Add formateur With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
            setLoadingAddFormateur(false)
        }
    }

    return (
        <Layout header={"Ajouter Un Formateur"} Formateur={"active"} content={
            <div class="contentDashboard">
                <div class="formAdmin">
                    <h1>Ajouter Un Formateur</h1>
                    <form onSubmit={addFormateur}>
                        <div>
                            <p>Matricule</p>
                            <input onChange={handleFormateur} name='Matricule' type="text" placeholder="Matricule" required />
                        </div>
                        <div>
                            <p>Nom Formateur</p>
                            <input onChange={handleFormateur} name='Nom_Formateur' type="text" placeholder="Nom Formateur" required />
                        </div>
                        <div>
                            <p>Abreviation</p>
                            <input onChange={handleFormateur} name='Abreviation' type="text" placeholder="Abreviation" required />
                        </div>
                        <div>
                            <p>Telephone</p>
                            <input onChange={handleFormateur} name='Telephone' type="text" placeholder="Telephone" required />
                        </div>
                        <div>
                            <p>MH Statutaire</p>
                            <input onChange={handleFormateur} name='MH_Statutaire' type="text" placeholder="MH Statutaire" required />
                        </div>
                        <div>
                            <p>Statut</p>
                            <input onChange={handleFormateur} name='Statut' type="text" placeholder="Statut" required />
                        </div>
                        <div>
                            <p>Affectation</p>
                            <input onChange={handleFormateur} name='Affectation' type="text" placeholder="Affectation" required />
                        </div>
                        <div>
                            <p>Mutualise</p>
                            <input onChange={handleFormateur} name='Mutualise' type="text" placeholder="Mutualise" required />
                        </div>
                        <div>
                            <p>EFP mutualise</p>
                            <input onChange={handleFormateur} name='EFP_mutualise' type="text" placeholder="EFP mutualise" required />
                        </div>
                        <div>
                            <p>Email</p>
                            <input onChange={handleFormateur} name='Email' type="text" placeholder="Email" required />
                        </div>
                        <div>
                            <p>Id Salle</p>
                            <select onChange={handleFormateur} name='Id_Salle' required>
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
                            <input onChange={handleFormateur} name='Color' type="type" placeholder="Color" required />
                        </div>
                        <div>
                            <p>Background Color</p>
                            <input onChange={handleFormateur} name='Background_Color' type="type" placeholder="Background Color" required />
                        </div>
                        {!loadingAddFormateur && <button>Ajouter Formateur</button>}
                    </form>
                    {loadingAddFormateur && <div className='singleLoader'><span class="loader"></span></div>}
                </div>
            </div>
        }
        />
    )
}

export default AjouterFourmateur

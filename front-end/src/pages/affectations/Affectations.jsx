import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'

const Affectations = () => {

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


    const deleteAffectation = async (Code_Groupe, Id_module, formateur_Matricule) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/affectations/${Code_Groupe}/${Id_module}/${formateur_Matricule}`)
            getAffectations()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAffectationConfirm = (Code_Groupe, Id_module, formateur_Matricule) => {
        Swal.fire({
            title: "Do you want to delete This Affectation?",
            showDenyButton: true,
            confirmButtonText: "delete",
            denyButtonText: "Don't delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "", "success");
                deleteAffectation(Code_Groupe, Id_module, formateur_Matricule)
            }
        });
    }



    return (
        <>
            <Layout content={
                <div className='contentDashboard'>
                    <div class="formAdmin">
                        <h1>Affecations</h1>
                        {
                            loadingAffectations ?
                                <Loader />
                                :
                                <table className='table'>
                                    <tr>
                                        <th>Code_Groupe</th>
                                        <th>Id_module</th>
                                        <th>formateur_Matricule</th>
                                        <th>actions</th>
                                    </tr>
                                    {
                                        affectations.map((affectation, index) => (
                                            <tr key={index}>
                                                <td>{affectation.Code_Groupe}</td>
                                                <td>{affectation.module.code_module}</td>
                                                <td>{affectation.formateur.Nom_Formateur}</td>
                                                <td>
                                                    <button onClick={() => deleteAffectationConfirm(affectation.Code_Groupe, affectation.module.Id_module, affectation.formateur.Matricule)} className='delete'>Delete</button>
                                                    <Link to={`/affectations/EditAffectation/${affectation.Code_Groupe}/${affectation.module.Id_module}/${affectation.formateur.Matricule}`}><button className='update'>Update</button></Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </table>
                        }
                    </div>
                </div>

            } />

        </>
    )
}

export default Affectations


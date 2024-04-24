import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'
import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'

const Formateurs = () => {

    const [formateurs, setFormateurs] = useState([])
    const [loadingFormateurs, setLoadingFormateurs] = useState([])
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


    const deleteFormateur = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/formateurs/${id}`)
            getFormateurs()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteFormateurConfirm = (id) => {
        Swal.fire({
            title: "Do you want to delete This Formateur?",
            showDenyButton: true,
            confirmButtonText: "delete",
            denyButtonText: "Don't delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "", "success");
                deleteFormateur(id)
            }
        });
    }



    return (
        <>
            <Layout content={
                    <div class="contentDashboard">

            <div class="formAdmin">
                <h1>Formateurs</h1>
                {
                    loadingFormateurs ?
                        <Loader />
                        :
                        <table>
                            <tr>
                                <th>Matricule</th>
                                <th>Nom Formateur</th>
                                <th>Abreviation</th>
                                <th>Id Salle</th>
                                <th>Background Color</th>
                                <th>Color</th>
                                <th>actions</th>
                            </tr>
                            {
                                formateurs.map((formateur, index) => (
                                    <tr key={index}>
                                        <td>{formateur.Matricule}</td>
                                        <td>{formateur.Nom_Formateur}</td>
                                        <td>{formateur.Abreviation}</td>
                                        <td>{formateur.Id_Salle}</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ backgroundColor: formateur.Background_Color, width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}></div>
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <div style={{ backgroundColor: formateur.Color, width: '30px', height: '30px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}></div>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteFormateurConfirm(formateur.Matricule)} className='delete'>Delete</button>
                                            <Link to={`/formateurs/EditFormateur/${formateur.Matricule}`}><button className='update'>Update</button></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                }
            </div>
                    </div>
                }
            />
        </>
    )
}

export default Formateurs

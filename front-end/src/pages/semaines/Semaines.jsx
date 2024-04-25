import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'


const Semaines = () => {
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

    const deleteSemaine = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/semaines/${id}`)
            getSemaines()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSemaineConfirm = (id) => {
        Swal.fire({
            title: "Do you want to delete This Semaine?",
            showDenyButton: true,
            confirmButtonText: "delete",
            denyButtonText: "Don't delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!", "", "success");
                deleteSemaine(id)
            }
        });
    }

    return (
        <>
            <Layout header={"Semaines"} semaines={"active"} content={
                <div class="contentDashboard">
                    <div class="formAdmin">
                        <h1>Semaines</h1>
                        {
                            loadingSemaines ?
                                <Loader />
                                :
                                <table>
                                    <tr>
                                        <th>semaine</th>
                                        <th>firstDayOfWeek</th>
                                        <th>lastDayOfWeek</th>
                                        <th>Semaine_DRIF</th>
                                        <th>actions</th>
                                    </tr>
                                    {
                                        semaines.map((semaine, index) => (
                                            <tr key={index}>
                                                <td>{semaine.semaine}</td>
                                                <td>{semaine.firstDayOfWeek}</td>
                                                <td>{semaine.lastDayOfWeek}</td>
                                                <td>{semaine.Semaine_DRIF}</td>
                                                <td>
                                                    <button onClick={() => deleteSemaineConfirm(semaine.id)} className='delete'>Delete</button>
                                                    <Link to={`/semaines/EditSemaine/${semaine.id}`}><button className='update'>Update</button></Link>
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

export default Semaines

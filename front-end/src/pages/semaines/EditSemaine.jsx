import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader'
import { useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/Layout'
import axios from 'axios'
import Swal from 'sweetalert2'

const EditSemaine = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [semainesData, setSemaineData] = useState({})
    const [LoadingGetSingleSemaine, setLoadingGetSingleSemaine] = useState(false)
    const [loadingEditsemaine, setLoadingEditsemaine] = useState(false)
    const  handlesemaine= (e) => {
        setSemaineData({ ...semainesData, [e.target.name]: e.target.value })
    }

    const getSingleSemaine = async () => {
        setLoadingGetSingleSemaine(true)
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/semaines/${id}`)
            setSemaineData(response.data.semaine)
            setLoadingGetSingleSemaine(false)
        } catch (error) {
            console.log(error)
            setLoadingGetSingleSemaine(false)
        }
    }
    useEffect(() => {
        getSingleSemaine()
    }, [])


    const editSemaine = async (e) => {
        e.preventDefault()
        setLoadingEditsemaine(true)
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api/semaines/${id}`, semainesData)
            setLoadingEditsemaine(false)
            navigate('/semaines')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Edit semaine With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
            setLoadingEditsemaine(false)
        }
    }

  return (

    <Layout header={"Edit Une Semaine"} semaine={"active"} content={

        <div class="contentDashboard">
            <div class="formAdmin">
                <h1>Edit semaine</h1>
                {LoadingGetSingleSemaine ? <Loader /> :
                    <>
                        <form onSubmit={editSemaine}>
                            <div>
                                <p>semaine</p>
                                <input value={semainesData.semaine} onChange={handlesemaine} name='semaine' type="text" placeholder="semaine" required />
                            </div>
                            <div>
                                <p>firstDayOfWeek</p>
                                <input value={semainesData.firstDayOfWeek} onChange={handlesemaine} name='firstDayOfWeek' type="date" placeholder="firstDayOfWeek" required />
                            </div>
                            <div>
                                <p>lastDayOfWeek</p>
                                <input value={semainesData.lastDayOfWeek} onChange={handlesemaine} name='lastDayOfWeek' type="date" placeholder="lastDayOfWeek" required />
                            </div>
                            <div>
                                <p>Semaine_DRIF</p>
                                <input value={semainesData.Semaine_DRIF} onChange={handlesemaine} name='Semaine_DRIF' type="text" placeholder="Semaine_DRIF" required />
                            </div>
                            <div>
                                <p>annee</p>
                                <input value={semainesData.annee} onChange={handlesemaine} name='annee' type="text" placeholder="annee" required />
                            </div>

                            {
                                !loadingEditsemaine && <button>Edit semaine</button>
                            }
                        </form>
                        {loadingEditsemaine && <div className='singleLoader'><span class="loader"></span></div>}
                    </>
                }
            </div>

        </div>
    }
    />
  )
}

export default EditSemaine

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Layout from '../../components/Layout'

const AjouterSemaine = () => {
    const navigate = useNavigate()
    const [loadingSemaine, setloadingSemaine] = useState(false)
    const [semaineData, setSemaineData] = useState({})
    const handleSemaine = (e) => {
        setSemaineData({ ...semaineData, [e.target.name]: e.target.value })
    }
    const addSemaine = async (e) => {
        e.preventDefault()
        setloadingSemaine(true)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/semaines', semaineData)
            setloadingSemaine(false)
            navigate('/semaines')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Add semaine With Success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
            setloadingSemaine(false)
        }
    }

  return (
    <Layout header={"Ajouter Une Semaine"} semaines={"active"} content={
        <div class="contentDashboard">
            <div class="formAdmin">
                <h1>Ajouter Une Semaine</h1>
                <form onSubmit={addSemaine}>
                    <div>
                        <p>semaine</p>
                        <input onChange={handleSemaine} name='semaine' type="text" placeholder="semaine" required />
                    </div>
                    <div>
                        <p>firstDayOfWeek</p>
                        <input onChange={handleSemaine} name='firstDayOfWeek' type="date" placeholder="firstDayOfWeek" required />
                    </div>
                    <div>
                        <p>lastDayOfWeek</p>
                        <input onChange={handleSemaine} name='lastDayOfWeek' type="date" placeholder="lastDayOfWeek" required />
                    </div>
                    <div>
                        <p>Semaine_DRIF</p>
                        <input onChange={handleSemaine} name='Semaine_DRIF' type="text" placeholder="Semaine_DRIF" required />
                    </div>
                    <div>
                        <p>annee</p>
                        <input onChange={handleSemaine} name='annee' type="text" placeholder="annee" required />
                    </div>



                    {!loadingSemaine && <button>Ajouter Semaine</button>}
                </form>
                {loadingSemaine && <div className='singleLoader'><span class="loader"></span></div>}
            </div>
        </div>
    }
    />
  )
}

export default AjouterSemaine

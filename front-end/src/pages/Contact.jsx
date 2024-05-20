import React, { useState } from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const [fullName,setFullName]=useState();
    const [email,setEmail]=useState();
    const [description,setDescription]=useState();
    const [loadingAddContact, setLoadingAddContact] = useState(false)

    const navigate = useNavigate()

    const handleNotification = async (e) => {
        e.preventDefault()
        setLoadingAddContact(true)
        const data={
            fullName,email,description
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contacts', data)
            setLoadingAddContact(false)
            navigate('/')
            Swal.fire({
                position: "center-center",
                icon: "success",
                title: "Envoyer Message avec Succée",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.log(error)
            setLoadingAddContact(false)
        }
    }
  return (
    <div>
        <Navbar2 />
        <div className="contactPage">
            <div className="contactPageLeft">
                <img src="http://localhost:3000/images/Contact us-bro.svg" alt="" />
            </div>
            <div className="contactPageRight">
                <h1>Contact</h1>
                <form  onSubmit={handleNotification}>
                    <input type="text" placeholder='FullName' onChange={(e)=>setFullName(e.target.value)}/>
                    <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Description' onChange={(e)=>setDescription(e.target.value)}></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact

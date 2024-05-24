import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios'
import Swal from 'sweetalert2'

const Notification = () => {
    const [Contacts, setContacts] = useState([])
    const [loadingContacts, setLoadingContacts] = useState(false)
    const getContacts = async () => {
        setLoadingContacts(true)
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/contacts')
            setContacts(response.data.contacts)
            setLoadingContacts(false)
        } catch (error) {
            console.log(error)
            setLoadingContacts(false)
        }
    }
    useEffect(() => {
        getContacts()
    }, [])
    const deleteMessage = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/contacts/${id}`)
            getContacts()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteMessageConfirm = (id) => {
        Swal.fire({
            title: "Do you want to delete This Message?",
            showDenyButton: true,
            confirmButtonText: "delete",
            denyButtonText: "Don't delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Deleted!","", "success");
                deleteMessage(id)
            }
        });
    }


    

    return (
        <Layout header={"Notification"} Notification={"active"} content={
            <div class="contentDashboard">
                <div className='formAdmin'>
                    <h1> Notifications </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nom Complet</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Contacts.map((contact, index) => (
                                    <tr key={index}>
                                        <td>{contact.fullName}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.description}</td>
                                        <td>
                                            <button className="delete" onClick={() => deleteMessageConfirm(contact.id)} >Supprimer</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        }
        />
    )
}
export default Notification

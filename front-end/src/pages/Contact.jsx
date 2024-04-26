import React from 'react'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
        <Navbar2 />
        <div className="contactPage">
            <div className="contactPageLeft">
                <img src="http://localhost:3000/images/Contact us-bro.svg" alt="" />
            </div>
            <div className="contactPageRight">
                <h1>Contact</h1>
                <form action="">
                    <input type="text" placeholder='FirstName' />
                    <input type="text" placeholder='Email' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Description'></textarea>
                    <button>Submit</button>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact

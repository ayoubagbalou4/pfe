import React, { useState } from 'react'
import "./Login.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Login = () => {
    const [login,setLogin]=useState();
    const navigate=useNavigate()
    const [password,setPassword]=useState();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(login=="saad.alilou@ofppt.ma" && password=='directeurIstaNtic'){
            localStorage.setItem('admin',login)
            navigate('/Dashboard')
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "les informations sont incorrect!",
              });
        }

    }

  return (
    <div className="section">
        <div className="form">
            <div className="empty_side">
           <img src="http://localhost:3000/images/logo4.png" alt="" />
                <p>doubleAc est une plateforme web conçue pour simplifier la gestion des emplois du temps et le suivi pédagogique au sein de l'établissement NTIC Tanger. Cette application offre des fonctionnalités avancées pour planifier les cours, gérer les ressources, suivre la présence des étudiants et évaluer leur progression académique. Elle facilite également la communication entre les différents acteurs de l'établissement, notamment les groupes d'étudiants et les formateurs.</p>
            </div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <h5 className="error_message"></h5>
                <h5 className="error_message"></h5>
                <input  name="email" type="email" placeholder="login" onChange={e=>setLogin(e.target.value)}/>
                <h5 className="error_message"></h5>
                <input  name="password" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login

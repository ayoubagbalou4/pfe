import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { contextProvider } from '../context/Context';

const RealisationFormateur = () => {
    const { formateurs, seances, semaineNumber } = useContext(contextProvider);
    const calculeMHHebdoFormateur = (formateur ,semaine) => {
        let count = 0
        seances.filter(seance => seance.formateur_Matricule === formateur && seance.No_Semaine_Calendrier === semaine)
            .map(e => {
                count += e.MH
            })
        return count
    }
    const [formateur, setformateur] = useState()
    const [afficherSelect, setAfficherSelect] = useState(false)
    const [searchformateur, setSearchformateur] = useState('')
    const handleSelected = (formateur) => {
        setformateur(formateur)
        setAfficherSelect(false)
    }
    

  return (
    <>
    <Navbar/>
            
                
                <div className='parGroupe'>
                <h1>Réalisation des formateurs</h1>
                <div className="choisir_inputs two">
                    <div className="choisir_input_box3 select">
                        <p>Formateur</p>
                        <div onClick={() => setAfficherSelect(!afficherSelect)} className="select-btn1">
                            <span>{formateur ? formateur.Nom_Formateur : "Selectioner un formateur"}</span>
                            <i className="uil uil-angle-down"></i>
                        </div>
                        {
                            afficherSelect &&
                            <div className="content">
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                    <input onChange={(e) => setAfficherSelect(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                                </div>
                                <ul className="options1">
                                    {
                                        formateurs.map((s,index) => (
                                            <li onClick={() => handleSelected(s)} key={index}>
                                                {s.Nom_Formateur} 
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Matricule</th>
                            <th>Formateur</th>
                            {
                            semaineNumber.map((semaine) => (
                                
                                    <th> MH Hebdo -S {semaine.number}</th>
                                    
                               
                            ))
                        }

                            
                        </tr>
                    </thead>
                    <tbody>
                        { formateur?
                            <tr>
                            <td>{formateur.Matricule}</td>
                            <td>{formateur.Nom_Formateur}</td>
                           
                            {
                    semaineNumber.map((semaine) => (
                        
                            
                            <td>{calculeMHHebdoFormateur(formateur.Matricule,semaine.number)}</td>
                       
                    ))
                } 
                            
                        </tr>
                        :
                            formateurs.map((formateur) => (
                                <tr>
                                    <td>{formateur.Matricule}</td>
                                    <td>{formateur.Nom_Formateur}</td>
                                   
                                    {
                            semaineNumber.map((semaine) => (
                                
                                    
                                    <td>{calculeMHHebdoFormateur(formateur.Matricule,semaine.number)}</td>
                               
                            ))
                        }
                                   
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>

          
    </>
  )
}

export default RealisationFormateur
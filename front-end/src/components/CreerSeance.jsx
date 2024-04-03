import React, { useContext, useState } from 'react'
import { contextProvider } from '../context/Context'

const CreerSeance = () => {

    const { formateurs, salles, affectations } = useContext(contextProvider)

    const [searchFormateur, setSearchFormateur] = useState('')
    const [searchSalle, setSearchSalle] = useState('')
    const [searchModule, setSearchModule] = useState('')

    const [formateur, setFormateur] = useState()
    const [salle, setSalle] = useState('')
    const [module, setModule] = useState('')
    const [modules, setModules] = useState([])


    const [afficherSelect, setAfficherSelect] = useState(false)
    const [afficherSelectSalle, setAfficherSelectSalle] = useState(false)
    const [AfficherSelectModule, setAfficherSelectModule] = useState(false)

    const handleSelected = (formateur) => {
        setFormateur(formateur)
        setAfficherSelect(false)
        setSalle(formateur.Id_Salle)
        const moduleParFormateur = affectations.filter((e) => e.formateur_Matricule == formateur.Matricule)
        setModules(moduleParFormateur)
        console.log(formateur)
    }
    const handleSelectedSalle = (salle) => {
        setAfficherSelectSalle(false)
        setSalle(salle.Id_Salle)
    }
    const handleSelectedModule = (module) => {
        setAfficherSelectModule(false)
        setModule(module.module.code_module)
    }


    return (
        <div className="choisir_section">
            <h3>Chosir la semaine pour elaborer son tableau</h3>
            <div className="choisir_inputs">

                <div className="choisir_input_box1 select">
                    <p>Formateur</p>
                    <div onClick={() => setAfficherSelect(!afficherSelect)} className="select-btn1">

                        <span> {formateur ? formateur.Nom_Formateur : "Selectioner un Formateur"}</span>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    {
                        afficherSelect &&
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input onChange={(e) => setSearchFormateur(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                            </div>
                            <ul className="options1">
                                {
                                    formateurs.map((e, index) => {
                                        if (e.Nom_Formateur.toLowerCase().includes(searchFormateur.toLowerCase())) {
                                            return (
                                                <li onClick={() => handleSelected(e)} key={index}>{e.Nom_Formateur}</li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    }
                </div>

                <div className="choisir_input_box select">
                    <p>Salle</p>
                    <div onClick={() => setAfficherSelectSalle(!afficherSelectSalle)} className="select-btn1">

                        <span> {salle ? salle : "Selectioner une Salle"}</span>
                        <i className="uil uil-angle-down"></i>
                    </div>

                    {
                        afficherSelectSalle && <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input className="input" spellcheck="false" type="text" placeholder="Search" onChange={(e) => setSearchSalle(e.target.value)} />
                            </div>
                            <ul className="options">
                                {
                                    salles.map((e, index) => {
                                        if (e.Id_Salle.toLowerCase().includes(searchSalle.toLowerCase())) {
                                            return (
                                                <li onClick={() => handleSelectedSalle(e)} key={index}>{e.Id_Salle}</li>

                                            )
                                        }
                                    })
                                }
                            </ul>

                        </div>
                    }

                </div>

                <div className="choisir_input_box2 select">
                    <p>Module</p>
                    <div onClick={() => setAfficherSelectModule(!AfficherSelectModule)} className="select-btn1">
                        <span> {module ? module : "Selectioner un Module"}</span>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    {AfficherSelectModule &&
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input onChange={(e) => setSearchModule(e.target.value)} className="input2" spellcheck="false" type="text" placeholder="Search" />
                            </div>
                            <ul className="options2">
                                {
                                    modules.map((e, index) => {
                                        if (e.module.code_module.toLowerCase().includes(searchModule.toLowerCase())) {
                                            return (
                                                <li onClick={() => handleSelectedModule(e)} key={index}>{e.module.code_module} ({e.Id_module})</li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>}
                </div>
                <div className="choisir_input_box">
                    <table draggable='true'>
                        <tr><th>{formateur ? formateur.Abreviation : "Foramteur"}</th></tr>
                        <tr><th>{salle ? salle : "Salle"}</th></tr>
                        <tr><th>{module ? module : "Module"}</th></tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CreerSeance

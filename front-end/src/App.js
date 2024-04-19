import React from 'react'
import './App.css'
import Context from './context/Context'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ParGroupe from './SuiviPedagogique/AffectationModule/ParGroupe'
import ParFormateur from './SuiviPedagogique/AffectationModule/ParFormateur'
import ModuleNonAffectees from './SuiviPedagogique/AffectationModule/ModuleNonAffectees'
import MHaffForateur from './SuiviPedagogique/AffectationModule/MHaffForateur'
import RealisationFormateurParSemaine from './SuiviPedagogique/AffectationModule/RealisationFormateurParSemaine'
import ParGroupeModule from './SuiviPedagogique/AffectationModule/ParGroupeModule'
import ApTotalGroupe from './SuiviPedagogique/ApTotalGroupe'
import Home from './pages/Home'
import RealisationFormateur from './SuiviPedagogique/RealisationFormateur'
import AvancementProgramme from './SuiviPedagogique/AvancementProgramme'
import EmploiTemps from './pages/EmploiTemps'
import EmploiTempsFormateur from './pages/EmploiTempsFormateur'
import OccupationSalle from './pages/OccupationSalle'
import AjouterFourmateur from './pages/formateurs/AjouterFourmateur'
import Formateurs from './pages/formateurs/Formateurs'
import EditFormateur from './pages/formateurs/EditFormateur'
import AjouterAffectation from './pages/affectations/AjouterAffectation'
import Affectations from './pages/affectations/Affectations'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Context>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/suivi/affectation/groupe' element={<ParGroupe />}/>
                <Route path='/suivi/affectation/groupeModule' element={<ParGroupeModule />}/>
                <Route path='/suivi/affectation/formateur' element={<ParFormateur />}/>
                <Route path='/suivi/affectation/nonAffecte' element={<ModuleNonAffectees />}/>
                <Route path='/suivi/affectation/MH-aff-Formateur' element={<MHaffForateur />}/>
                <Route path='/suivi/Realisation-Formateur-ParSemaine' element={<RealisationFormateurParSemaine />}/>
                <Route path='/suivi/ApTotaleGroupe' element={<ApTotalGroupe />}/>
                <Route path='/suivi/RealisationFormateur' element={<RealisationFormateur />}/>
                <Route path='/suivi/AvancementProgramme' element={<AvancementProgramme />}/>
                <Route path='/EmploiTemps' element={<EmploiTemps/>}/>
                <Route path='/EmploiTempsFormateur' element={<EmploiTempsFormateur/>}/>
                <Route path='/OcupationSalle' element={<OccupationSalle/>}/>

                <Route path='/formateurs/AjouterFourmateur' element={<AjouterFourmateur/>}/>
                <Route path='/formateurs' element={<Formateurs/>}/>
                <Route path='/formateurs/EditFormateur/:matricule' element={<EditFormateur/>}/>

                <Route path='/affectations/AjouterAffectation' element={<AjouterAffectation/>}/>
                <Route path='/affectations' element={<Affectations/>}/>

            </Routes>
        </Context>
    </BrowserRouter>
    </>
  )
}

export default App

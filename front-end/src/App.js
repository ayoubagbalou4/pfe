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
            </Routes>
        </Context>
    </BrowserRouter>
    </>
  )
}

export default App

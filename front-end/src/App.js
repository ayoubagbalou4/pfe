import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import CreerSeance from './components/CreerSeance'
import MainTable from './components/MainTable'
import Context from './context/Context'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ParGroupe from './SuiviPedagogique/AffectationModule/ParGroupe'
import ParFormateur from './SuiviPedagogique/AffectationModule/ParFormateur'
import ModuleNonAffectees from './SuiviPedagogique/AffectationModule/ModuleNonAffectees'
import MHaffForateur from './SuiviPedagogique/AffectationModule/MHaffForateur'
import RealisationFormateurParSemaine from './SuiviPedagogique/AffectationModule/RealisationFormateurParSemaine'
import ParGroupeModule from './SuiviPedagogique/AffectationModule/ParGroupeModule'

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
            </Routes>
        </Context>
    </BrowserRouter>
    </>
  )
}

export default App

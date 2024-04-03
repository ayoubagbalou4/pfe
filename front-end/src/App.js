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

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Context>
            <Routes>
                <Route path='/' element={<Home />}/>

                <Route path='/suivi/affectation/groupe' element={<ParGroupe />}/>
                <Route path='/suivi/affectation/formateur' element={<ParFormateur />}/>

            </Routes>
        </Context>
    </BrowserRouter>
    </>
  )
}

export default App

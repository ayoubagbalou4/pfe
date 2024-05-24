import React, { useContext, useEffect, useState } from 'react'
import CreerSeance from '../components/CreerSeance'
import MainTable from '../components/MainTable'
import { contextProvider } from '../context/Context'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar'

const Home = () => {

    const { loadingSeancesParSemaine } = useContext(contextProvider)
    const [scroll, setScroll] = useState(false)

    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        setScroll(!scroll)
    }

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setScroll(!scroll)
    }


    return (
        <>
            <Navbar />
            <CreerSeance />
            {
                loadingSeancesParSemaine ?
                    <Loader />
                    :
                    <MainTable />
            }
            {!loadingSeancesParSemaine && <div className="arrowDown">
                {
                    scroll ?
                        <i onClick={goToTop} className="fa-solid fa-circle-up"></i>
                        :
                        <i onClick={goToBottom} className="fa-solid fa-circle-down"></i>
                }
            </div>}
        </>
    )
}

export default Home

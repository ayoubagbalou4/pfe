import React, { useContext } from 'react'
import CreerSeance from '../components/CreerSeance'
import MainTable from '../components/MainTable'
import { contextProvider } from '../context/Context'
import Loader from '../components/Loader'

const Home = () => {

  const {loadingSeancesParSemaine} = useContext(contextProvider)

  return (
    <>
        <CreerSeance />
        {
          loadingSeancesParSemaine ? 
          <Loader />
          :
          <MainTable />
        }
    </>
  )
}

export default Home

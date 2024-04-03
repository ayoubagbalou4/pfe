import React from 'react'
import Navbar from '../components/Navbar'
import CreerSeance from '../components/CreerSeance'
import MainTable from '../components/MainTable'

const Home = () => {
  return (
    <div>
        <Navbar />
            <CreerSeance />
            <MainTable />
    </div>
  )
}

export default Home

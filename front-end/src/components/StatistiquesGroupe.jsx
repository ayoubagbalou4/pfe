import React, { useContext } from 'react'
import { Chart as chartjs } from 'chart.js/auto'
import { contextProvider } from '../context/Context';
import { Bar } from 'react-chartjs-2';
import Navbar from './Navbar'
const StatistiquesGroupe = () => {
const{statistiquesG}=useContext(contextProvider)

 const data = {
    labels: statistiquesG.map(e=>e.Code_Groupe),
    datasets: [{
      label: 'MH hebdomadaires par groupes',
      data: statistiquesG.map(e=>e.MHHebdog),
      backgroundColor: statistiquesG.map(e=>e.groupe.background),
      borderColor: statistiquesG.map(e=>e.groupe.background),
      borderWidth: 1
    }]
  };

  const options = {
    legend: {
      display: true,
      position: 'top', // Position of the legend
      align: 'center', // Alignment of the legend
      fullWidth: true, // Fit the legend within the container
      reverse: false, // Reverse order of the legend items
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  return (
    <>
    <Navbar />
    <div style={{width:'90%' , margin: 'auto'}} >
      <Bar data={data} options={options} />
    </div>
    </>
  );
}

export default StatistiquesGroupe
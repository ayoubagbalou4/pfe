import React, { useContext } from 'react'
import { contextProvider } from '../context/Context';
import { Line } from 'react-chartjs-2';
import Navbar from './Navbar';
const StatistiqueSemaineAct = () => {
    const{seances,salles,modules}=useContext(contextProvider)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.1
          }
        ]
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

  return (
    <>
    <Navbar />
    <div style={{width:'80%',margin:'auto'}}>
      <h2>Line Chart Example</h2>
      <Line data={data} options={options} />
    </div>
    </>
  )
}

export default StatistiqueSemaineAct
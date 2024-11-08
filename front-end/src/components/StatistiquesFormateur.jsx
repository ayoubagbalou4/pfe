import React, { useContext } from 'react'
import { Chart as chartjs } from 'chart.js/auto'
import { contextProvider } from '../context/Context';
import Navbar from './Navbar';
import { Bar, Line } from 'react-chartjs-2';
import Layout from './Layout';
const StatistiquesFormateur = () => {
    const { statistiquesF } = useContext(contextProvider)

    const data = {
        labels: statistiquesF.map(e => e.formateur.Nom_Formateur),
        datasets: [{
            label: 'Réalisation des formateurs Réalisation Par semaine',
            data: statistiquesF.map(e => e.MHHebdoF),
            backgroundColor: statistiquesF.map(e => e.formateur.Background_Color),
            borderColor: statistiquesF.map(e => e.formateur.Background_Color),
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
            <Layout header={"Réalisation des formateurs"} Statistiques={"active"} content={
                <div class="contentDashboard">

                    <div style={{ width: '90%', margin: 'auto' }} >
                        <Bar data={data} options={options} />
                    </div>
                </div>
            }
            />
        </>
    );
}

export default StatistiquesFormateur

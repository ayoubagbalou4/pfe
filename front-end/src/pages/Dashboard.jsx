import React, { useContext } from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Absence from "../components/Absence";
import { Line } from 'react-chartjs-2';
import { contextProvider } from "../context/Context";

const Dashboard = () => {
    const { statistiquesF, semaines, seances } = useContext(contextProvider)
    const data = {
        labels: semaines.map(e => e.semaine),
        datasets: [{
            label: 'Séances Par Semaine',
            data: semaines.map(e => seances.filter(s => s.No_Semaine_Calendrier === e.semaine).length),
            borderWidth: 1,
            borderColor:"green",
            backgroundColor:"#AAFF00"
        }]
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Séances Par Semaine'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: ' Numéro De Semaine'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Nombre des Séances'
                },
                ticks: {
                    beginAtZero: true
                }
            }
        }
    };

    return (
        <Layout
            header={"Dashboard"} Dashboard={"active"}
            content={
                <div class="contentDashboard">
                    <div class="boxs">
                        <Link to={"/OcupationSalle"}>
                            <Box
                                logo="fa-solid fa-house-laptop"
                                titre="Occupation Des Salles"
                            />
                        </Link>
                        <Link to={"/Absences"}>
                            <Box
                                logo="fa-solid fa-user-xmark"
                                titre="Absences "
                            />
                        </Link>
                        <Link to={"/"}>
                            <Box
                                logo="fa-regular fa-calendar"
                                titre="Créer Un Emploi "
                            />
                        </Link>
                    </div>
                    <div style={{ width: '90%', margin: 'auto' }}>
                        <Line data={data} options={options} />
                    </div>
                </div>
            }
        />
    );
};

export default Dashboard;

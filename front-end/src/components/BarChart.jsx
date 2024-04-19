import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const [semaine, setSemaine] = useState(null);
  const [formateurs, setFormateurs] = useState([]);
  const [mhHebdo, setMHHebdo] = useState([]);

  useEffect(() => {
    // Ici, remplacez fetchData par votre logique pour récupérer les données des formateurs et de la MH hebdomadaire
    const fetchData = async () => {
      try {
        // Remplacez ces données factices par vos données réelles
        const data = [
          { Matricule: "1", Nom_Formateur: "Formateur 1", MHHebdo: 20 },
          { Matricule: "2", Nom_Formateur: "Formateur 2", MHHebdo: 15 },
          { Matricule: "3", Nom_Formateur: "Formateur 3", MHHebdo: 25 },
          { Matricule: "4", Nom_Formateur: "Formateur 4", MHHebdo: 25 },
          { Matricule: "5", Nom_Formateur: "Formateur 5", MHHebdo: 15 },
          { Matricule: "6", Nom_Formateur: "Formateur 6", MHHebdo: 20 },
          { Matricule: "7", Nom_Formateur: "Formateur 7", MHHebdo: 15 },
          { Matricule: "8", Nom_Formateur: "Formateur 8", MHHebdo: 25 },
          { Matricule: "9", Nom_Formateur: "Formateur 9", MHHebdo: 10 },
          { Matricule: "10", Nom_Formateur: "Formateur 10", MHHebdo: 20 },
          { Matricule: "11", Nom_Formateur: "Formateur 11", MHHebdo: 25 },
        ];
        setFormateurs(data.map((formateur) => formateur.Nom_Formateur));
        setMHHebdo(data.map((formateur) => formateur.MHHebdo));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (formateurs.length > 0 && mhHebdo.length > 0) {
      // Créez le graphique à barres
      const ctx = document.getElementById("barChart");

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: formateurs,
          datasets: [
            {
              label: `MH Hebdo - S ${semaine}`,
              data: mhHebdo,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "MH Hebdo"
              }
            },
            x: {
              title: {
                display: true,
                text: "Formateurs"
              }
            }
          }
        }
      });
    }
  }, [semaine, formateurs, mhHebdo]);

  return (
    <div style={{ width:'60%',margin:'200px' }}>
      <center><h2>Réalisation des formateurs Réalisation Par semaine</h2></center>
      {/* Ajoutez ici votre logique pour sélectionner la semaine */}
      <canvas id="barChart" width="100" height="100"></canvas>
    </div>
  );
};

export default BarChart;

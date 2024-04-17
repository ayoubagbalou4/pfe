import React, { useContext, useState } from "react";
import { contextProvider } from ".././context/Context";

const GroupeSeance = (props) => {
    const { seancesParSemaine, setSeancesParSemaine, seanceGenerate } =
        useContext(contextProvider);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("index", index);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDrop = (oldIndex, newIndex) => {
        const newSeances = [...seancesParSemaine];

        const oldItem = seancesParSemaine.find(item => item.id == oldIndex) ? seancesParSemaine.find(item => item.id == oldIndex) : seanceGenerate
        const newItem = seancesParSemaine.find(item => item.id == newIndex)

        const oldItemTemp = oldItem['code_seance']
        oldItem['code_seance'] = newItem['code_seance']
        newItem['code_seance'] = oldItemTemp

        const oldCodeGroupeTemp = oldItem['Code_Groupe']
        oldItem['Code_Groupe'] = newItem['Code_Groupe']
        newItem['Code_Groupe'] = oldCodeGroupeTemp

        // const oldJourSemaineTemp = oldItem['Jour_de_semaine']
        // oldItem['Jour_de_semaine'] = newItem['Jour_de_semaine']
        // newItem['Jour_de_semaine'] = oldJourSemaineTemp

        // const oldDateTemp = oldItem['Date']
        // oldItem['Date'] = newItem['Date']
        // newItem['Date'] = oldDateTemp

        // const oldDateDebutTemp = oldItem['Horaire_debut']
        // oldItem['Horaire_debut'] = newItem['Horaire_debut']
        // newItem['Horaire_debut'] = oldDateDebutTemp

        // const oldHoraireFinTemp = oldItem['Horaire_fin']
        // oldItem['Horaire_fin'] = newItem['Horaire_fin']
        // newItem['Horaire_fin'] = oldHoraireFinTemp

        // const oldTypeSeanceTemp = oldItem['Type_seance']
        // oldItem['Type_seance'] = newItem['Type_seance']
        // newItem['Type_seance'] = oldTypeSeanceTemp


        newSeances.splice(seancesParSemaine.indexOf(newItem), 1, oldItem)
        newSeances.splice(seancesParSemaine.indexOf(oldItem), 1, newItem)
        setSeancesParSemaine(newSeances)

        console.log('oldIndex', oldIndex)
        console.log('newIndex', newIndex)
        console.log('oldItem', oldItem)
        console.log('newItem', newItem)

    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const details = (id) => {
        const x = seancesParSemaine.find(item => item.id == id)
        console.log(x)
    };

    return (
        <td
            key={props.index}
            className={`nested_table_td_four`}
            draggable="true"
            onDragStart={(event) => handleDragStart(event, props.index)}
            onDrop={(event) => {
                const oldIndex = parseInt(event.dataTransfer.getData("index"));
                const newIndex = props.index;
                handleDrop(oldIndex, newIndex);
            }}
            onDragOver={allowDrop}
            onClick={() => details(props.index)}
        >
            <table
                className={props.formateur}
                style={{ backgroundColor: props.bg, color: props.color }}
            >
                <tr>
                    <td>{props.formateur}</td>
                </tr>
                <tr>
                    <td>{props.module}</td>
                </tr>
                <tr>
                    <td>{props.salle}</td>
                </tr>
            </table>
        </td>
    );
};

export default GroupeSeance;

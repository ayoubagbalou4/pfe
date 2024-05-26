import React, { useContext, useState } from "react";
import { contextProvider } from ".././context/Context";
import Swal from "sweetalert2";
import axios from "axios";

const GroupeSeance = (props) => {
    const {
        seancesParSemaine,
        setSeancesParSemaine,
        seanceGenerate,
        formateurs,
        setSeanceGenerate,
    } = useContext(contextProvider);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("index", index);
        e.dataTransfer.effectAllowed = "move";
    };

    const handleDrop = (oldIndex, newIndex) => {
        const oldItem = seancesParSemaine.find((item) => item.id == oldIndex)
            ? seancesParSemaine.find((item) => item.id == oldIndex)
            : seanceGenerate;
        const newItem = seancesParSemaine.find((item) => item.id == newIndex);

        if (oldItem.generate) {
            Swal.fire({
                title: "Ajouter Cette Seance?",
                showCancelButton: true,
                confirmButtonText: "Ajouter",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const copiedOldItem = { ...oldItem };
                    copiedOldItem["code_seance"] = newItem["code_seance"];
                    copiedOldItem["Code_Groupe"] = newItem["Code_Groupe"];
                    copiedOldItem["Date"] = newItem["Date"];
                    copiedOldItem["Horaire_debut"] = newItem["Horaire_debut"];
                    copiedOldItem["Horaire_fin"] = newItem["Horaire_fin"];
                    copiedOldItem["Jour_de_semaine"] =
                        newItem["Jour_de_semaine"];
                    copiedOldItem["No_Semaine_Calendrier"] =
                        newItem["No_Semaine_Calendrier"];
                    copiedOldItem["No_Semaine_DRIF"] =
                        newItem["No_Semaine_DRIF"];
                    copiedOldItem["MH"] = newItem["MH"];
                    delete copiedOldItem.generate;
                    const formateur = formateurs.find(
                        (e) => copiedOldItem.formateur == e.Abreviation
                    )?.Matricule;

                    const data = {
                        Id_Salle: copiedOldItem.Id_Salle,
                        Code_Groupe: copiedOldItem.Code_Groupe,
                        formateur_Matricule: copiedOldItem.formateur_Matricule
                            ? copiedOldItem.formateur_Matricule
                            : formateur,
                        Id_module: copiedOldItem.Id_module,
                        code_seance: copiedOldItem.code_seance,
                        Date: copiedOldItem.Date,
                        Jour_de_semaine: copiedOldItem.Jour_de_semaine,
                        No_Semaine_Calendrier:
                            copiedOldItem.No_Semaine_Calendrier,
                        No_Semaine_DRIF: copiedOldItem.No_Semaine_DRIF,
                        MH: 2.5,
                        Horaire_debut: copiedOldItem.Horaire_debut,
                        Horaire_fin: copiedOldItem.Horaire_fin,
                    };
                    setSeanceGenerate({
                        generate: true,
                    });

                    const seanceFind = seancesParSemaine.filter((s) => s.code_seance == copiedOldItem.code_seance && s.Id_Salle == copiedOldItem.Id_Salle);

                    if (seanceFind.length > 0) {
                        const amphiCount = seanceFind.filter((s) => s.Id_Salle == "AMPHI").length;
                        const distanceCount = seanceFind.filter((s) => s.Id_Salle == "A distance").length;

                        if (seanceFind.length == 1 && seanceFind[0].Id_Salle !== "AMPHI" && seanceFind[0].Id_Salle !== "A distance") {
                            Swal.fire({
                                icon: "error",
                                title: "Salle Deja Occupée!....",
                            });
                            return;
                        }

                        if (amphiCount > 2) {
                            Swal.fire({
                                icon: "error",
                                title: "Limit of AMPHI sessions exceeded!",
                            });
                            return;
                        }

                        if (distanceCount > 2) {
                            Swal.fire({
                                icon: "error",
                                title: "Limit of A distance sessions exceeded!",
                            });
                            return;
                        }
                    }

                    try {
                        const respone = await axios.post(
                            `http://127.0.0.1:8000/api/dupliquer`,
                            data
                        );
                        console.log(respone.data);
                    } catch (error) {
                        console.log(error);
                    }

                    console.log(data);

                    const newSeances = [...seancesParSemaine];
                    newSeances.splice(
                        newSeances.indexOf(newItem),
                        0,
                        copiedOldItem
                    );
                    setSeancesParSemaine(newSeances);
                }
            });
        } else {
            Swal.fire({
                title: "Choisir ton Option?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Dupliquer",
                denyButtonText: "Remplacer",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const copiedOldItem = { ...oldItem };
                    copiedOldItem["id"] = newItem["id"];
                    copiedOldItem["code_seance"] = newItem["code_seance"];
                    copiedOldItem["Code_Groupe"] = newItem["Code_Groupe"];
                    copiedOldItem["Date"] = newItem["Date"];
                    copiedOldItem["Horaire_debut"] = newItem["Horaire_debut"];
                    copiedOldItem["Horaire_fin"] = newItem["Horaire_fin"];
                    copiedOldItem["Jour_de_semaine"] =
                        newItem["Jour_de_semaine"];
                    copiedOldItem["No_Semaine_Calendrier"] =
                        newItem["No_Semaine_Calendrier"];
                    copiedOldItem["No_Semaine_DRIF"] =
                        newItem["No_Semaine_DRIF"];
                    copiedOldItem["MH"] = newItem["MH"];
                    const formateur = formateurs.find(
                        (e) => copiedOldItem.formateur == e.Abreviation
                    )?.Matricule;


                    const seanceFind = seancesParSemaine.filter((s) => s.code_seance == copiedOldItem.code_seance && s.Id_Salle == copiedOldItem.Id_Salle);

                    if (seanceFind.length > 0) {
                        const amphiCount = seanceFind.filter((s) => s.Id_Salle == "AMPHI").length;
                        const distanceCount = seanceFind.filter((s) => s.Id_Salle == "A distance").length;

                        if (seanceFind.length == 1 && seanceFind[0].Id_Salle !== "AMPHI" && seanceFind[0].Id_Salle !== "A distance") {
                            Swal.fire({
                                icon: "error",
                                title: "Salle Deja Occupée!....",
                            });
                            return;
                        }

                        if (amphiCount > 2) {
                            Swal.fire({
                                icon: "error",
                                title: "Limit of AMPHI sessions exceeded!",
                            });
                            return;
                        }

                        if (distanceCount > 2) {
                            Swal.fire({
                                icon: "error",
                                title: "Limit of A distance sessions exceeded!",
                            });
                            return;
                        }
                    }


                    const data = {
                        Id_Salle: copiedOldItem.Id_Salle,
                        Code_Groupe: copiedOldItem.Code_Groupe,
                        formateur_Matricule: copiedOldItem.formateur_Matricule
                            ? copiedOldItem.formateur_Matricule
                            : formateur,
                        Id_module: copiedOldItem.Id_module,
                        code_seance: copiedOldItem.code_seance,
                        Date: copiedOldItem.Date,
                        Jour_de_semaine: copiedOldItem.Jour_de_semaine,
                        No_Semaine_Calendrier:
                            copiedOldItem.No_Semaine_Calendrier,
                        No_Semaine_DRIF: copiedOldItem.No_Semaine_DRIF,
                        MH: 2.5,
                        Horaire_debut: copiedOldItem.Horaire_debut,
                        Horaire_fin: copiedOldItem.Horaire_fin,
                    };

                    try {
                        axios.post(`http://127.0.0.1:8000/api/dupliquer`, data);
                    } catch (error) {
                        console.log(error);
                    }
                    const newSeances = [...seancesParSemaine];
                    newSeances.splice(
                        newSeances.indexOf(newItem),
                        0,
                        copiedOldItem
                    );
                    setSeancesParSemaine(newSeances);
                } else if (result.isDenied) {


                    const data = {
                        Id_Salle: oldItem.Id_Salle,
                        Code_Groupe: oldItem.Code_Groupe,
                        formateur_Matricule: oldItem.formateur_Matricule ? oldItem.formateur_Matricule : formateurs.find(formateur => formateur.Abreviation == oldItem.formateur)?.Matricule,
                        Id_module: oldItem.Id_module,
                        code_seance: oldItem.code_seance,
                        Date: oldItem.Date,

                        Id_Salle1: newItem.Id_Salle,
                        Code_Groupe1: newItem.Code_Groupe,
                        formateur_Matricule1: newItem.formateur_Matricule ? newItem.formateur_Matricule : formateurs.find(formateur => formateur.Abreviation == newItem.formateur)?.Matricule,
                        Id_module1: newItem.Id_module,
                        code_seance1: newItem.code_seance,
                        Date1: newItem.Date,

                        Jour_de_semaine: newItem.Jour_de_semaine,
                        Horaire_debut: newItem.Horaire_debut,
                        Horaire_fin: newItem.Horaire_fin,
                        Type_seance: oldItem.Type_seance,
                    };

                    console.log(newItem)
                    console.log(oldItem)
                    console.log(data)

                    try {
                        const response = await axios.post(`http://127.0.0.1:8000/api/remplacer`, data)
                        console.log(response.data)
                    } catch (error) {
                        console.log(error)
                    }




                    const swapProperties = (oldItem, newItem, property) => {
                        const temp = oldItem[property];
                        oldItem[property] = newItem[property];
                        newItem[property] = temp;
                    };

                    const propertiesToSwap = [
                        "code_seance",
                        "Code_Groupe",
                        "Date",
                        "Jour_de_semaine",
                        "Horaire_debut",
                        "Horaire_fin"
                    ];

                    propertiesToSwap.forEach(property => {
                        swapProperties(oldItem, newItem, property);
                    });

                    const newSeances = [...seancesParSemaine];

                    const oldItemIndex = newSeances.findIndex(item => item === oldItem);
                    const newItemIndex = newSeances.findIndex(item => item === newItem);

                    if (oldItemIndex > -1 && newItemIndex > -1) {
                        newSeances[oldItemIndex] = newItem;
                        newSeances[newItemIndex] = oldItem;
                    }

                    setSeancesParSemaine(newSeances);


                }
            });
        }
    };

    const allowDrop = (e) => {
        e.preventDefault();
    };

    const details = (id) => {
        const x = seancesParSemaine.find((item) => item.id == id);
        console.log(x);
    };

    const handleClick = (event, id) => {
        event.preventDefault();
        const seance = seancesParSemaine.find((e) => e.id == id);
        const formateur = formateurs.find(
            (e) => seance?.formateur == e.Abreviation
        )?.Matricule;
        Swal.fire({
            title: "Seance Exécuté?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Seance Non Exécuté ",
            denyButtonText: "Supprimer La Seance!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { value: text } = await Swal.fire({
                    input: "textarea",
                    inputLabel: "Justification",
                    inputPlaceholder: "entrer la justification...",
                    inputAttributes: {
                        "aria-label": "entrer la justification",
                    },
                    showCancelButton: true,
                });
                if (text) {

                    const newSeances = [...seancesParSemaine];
                    const itemSeance = seancesParSemaine.find(
                        (item) => item.id == id
                    );
                    newSeances.splice(newSeances.indexOf(itemSeance), 1);
                    setSeancesParSemaine(newSeances);

                    const data = {
                        formateur_Matricule: seance.formateur_Matricule ? seance.formateur_Matricule : formateurs.find(formateur => formateur.Abreviation == itemSeance.formateur)?.Matricule,
                        justification: text,
                        jour: seancesParSemaine.find((s) => s.id == id)?.Jour_de_semaine,
                        semaine: seancesParSemaine.find((s) => s.id == id)?.No_Semaine_Calendrier,
                        date: seancesParSemaine.find((s) => s.id == id)?.Date,
                        codeSeance: seancesParSemaine.find((s) => s.id == id)?.code_seance,
                    };
                    const codeGroupe = seancesParSemaine.find((s) => s.id == id)?.Code_Groupe;
                    const codeSeance = seancesParSemaine.find((s) => s.id == id)?.code_seance;
                    console.log(data);
                    try {
                        await axios.post(
                            `http://127.0.0.1:8000/api/absences`,
                            data
                        );
                        await axios.delete(
                            `http://127.0.0.1:8000/api/supprimer/${codeGroupe}/${data.formateur_Matricule}/${codeSeance}/${data.semaine}`
                        );
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else if (result.isDenied) {
                const newSeances = [...seancesParSemaine];
                const itemSeance = seancesParSemaine.find(
                    (item) => item.id == id
                );
                newSeances.splice(newSeances.indexOf(itemSeance), 1);
                setSeancesParSemaine(newSeances);
                const formateurM = formateurs.find(
                    (s) => s.Abreviation == itemSeance.formateur
                )?.Matricule
                    ? formateurs.find(
                        (s) => s.Abreviation == itemSeance.formateur
                    )?.Matricule
                    : itemSeance.formateur_Matricule;
                try {
                    await axios.delete(
                        `http://127.0.0.1:8000/api/supprimer/${itemSeance.Code_Groupe}/${formateurM}/${itemSeance.code_seance}/${itemSeance.No_Semaine_Calendrier}`
                    );
                } catch (error) {
                    console.log(error);
                }
            }
        });
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
            onContextMenu={(event) => handleClick(event, props.index)}
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
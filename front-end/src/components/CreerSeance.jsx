import React, { useContext, useEffect, useState } from "react";
import { contextProvider } from "../context/Context";
import axios from "axios";

const CreerSeance = () => {
    const {
        formateurs,
        salles,
        affectations,
        seanceGenerate,
        setSeanceGenerate,
        semaines,
        setNSemaine,
        seances,
        nSemaine,
        getSeancesParSemaine
    } = useContext(contextProvider);



    const [semaine, setSemaine] = useState()
    const [afficherSelect0, setAfficherSelect0] = useState(false)
    const [searchSemaine, setSearchSemaine] = useState('')

    const handleSelected0 = (s) => {
        setSemaine(s)
        setAfficherSelect0(false)
        setNSemaine(s.semaine)
    }

    const [nSemaineBase, setNSemaineBase] = useState()
    const [semaineBase, setSemaineBase] = useState()
    const [afficherSelect00, setAfficherSelect00] = useState(false)
    const [searchSemaineBase, setSearchSemaineBase] = useState('')

    const handleSelected00 = async (s) => {
        setSemaineBase(s)
        setAfficherSelect00(false)
        setNSemaineBase(s.semaine)
    }

    useEffect(() => {
        const storeFromSemaineBase = async () => {
            try {
                if (nSemaine !== undefined && nSemaineBase !== undefined) {
                    const response = await axios.post(`http://127.0.0.1:8000/api/storeFromSemaineBase/${nSemaine}/${nSemaineBase}`);
                    console.log(response.data);
                    getSeancesParSemaine();
                }
            } catch (error) {
                console.log(error);
            }
        };

        storeFromSemaineBase();
    }, [nSemaineBase]);

    const [searchFormateur, setSearchFormateur] = useState("");
    const [searchSalle, setSearchSalle] = useState("");
    const [searchModule, setSearchModule] = useState("");

    const [formateur, setFormateur] = useState();
    const [salle, setSalle] = useState("");
    const [module, setModule] = useState("");
    const [modules, setModules] = useState([]);

    const [afficherSelect, setAfficherSelect] = useState(false);
    const [afficherSelectSalle, setAfficherSelectSalle] = useState(false);
    const [AfficherSelectModule, setAfficherSelectModule] = useState(false);

    const handleSelected = (formateur) => {
        setFormateur(formateur);
        setAfficherSelect(false);
        setSalle(formateur.Id_Salle);
        const moduleParFormateur = affectations.filter(
            (e) => e.formateur_Matricule == formateur.Matricule
        );
        setModules(moduleParFormateur);
    };
    const handleSelectedSalle = (salle) => {
        setAfficherSelectSalle(false);
        setSalle(salle.Id_Salle);
    };
    const handleSelectedModule = (module) => {
        setAfficherSelectModule(false);
        setModule(module.code_module);
        const x = {
            id: Math.floor(Math.random() * 100000000),
            formateur: formateur.Abreviation,
            color: formateur.Color,
            bg: formateur.Background_Color,
            Id_Salle: salle,
            module: module.code_module,
            Id_module: module.Id_module,
            generate: true,
            Type_seance: salle == 'A distance' ? "A DISTANCE" : "PRESENTIEL"
        };
        setSeanceGenerate(x);
    };



    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', seanceGenerate.id);
        e.dataTransfer.effectAllowed = 'move';
    };



    return (
        <div className="choisir_section">
            <div className="choisir_inputs two">
                <div className="choisir_input_box3 select">
                    <p>No Semaine Calendrier</p>
                    <div onClick={() => setAfficherSelect0(!afficherSelect0)} className="select-btn1">

                        {
                            nSemaine ?
                                <span>{semaine ? `S - ${semaine.semaine} (${semaine.firstDayOfWeek} - ${semaine.lastDayOfWeek})` :
                                    `S - ${semaines.find(s => s.semaine == nSemaine)?.semaine} (${semaines.find(s => s.semaine == nSemaine)?.firstDayOfWeek} - ${semaines.find(s => s.semaine == nSemaine)?.lastDayOfWeek})`}</span>
                                :
                                <span>Choisir Une Semaine</span>
                        }

                        <i className="uil uil-angle-down"></i>
                    </div>
                    {
                        afficherSelect0 &&
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input onChange={(e) => setSearchSemaine(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                            </div>
                            <ul className="options1">
                                {
                                    semaines.map((s, index) => (
                                        <li onClick={() => handleSelected0(s)} key={index}>
                                            S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek})
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
                <div className="choisir_input_box3 select">
                    <p>Select Semaine Base</p>
                    <div onClick={() => setAfficherSelect00(!afficherSelect00)} className="select-btn1">

                        {
                            nSemaineBase ?
                                <span>{semaineBase ? `S - ${semaineBase.semaine} (${semaineBase.firstDayOfWeek} - ${semaineBase.lastDayOfWeek})` :
                                    `S - ${semaines.find(s => s.semaine == semaineBase)?.semaine} (${semaines.find(s => s.semaine == semaineBase)?.firstDayOfWeek} - ${semaines.find(s => s.semaine == semaineBase)?.lastDayOfWeek})`}</span>
                                :
                                <span>Tableau Vide (Default) </span>
                        }

                        <i className="uil uil-angle-down"></i>
                    </div>
                    {
                        afficherSelect00 &&
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input onChange={(e) => setSearchSemaineBase(e.target.value)} className="input1" spellcheck="false" type="text" placeholder="Search" />
                            </div>
                            <ul className="options1">
                                {
                                    semaines.map((s, index) => (
                                        <li onClick={() => handleSelected00(s)} key={index}>
                                            S - {s.semaine} ({s.firstDayOfWeek} - {s.lastDayOfWeek})
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>

            <div className="choisir_inputs">

                <div className="choisir_input_box1 select">
                    <p>Formateur</p>
                    <div
                        onClick={() => setAfficherSelect(!afficherSelect)}
                        className="select-btn1"
                    >
                        <span>
                            {" "}
                            {formateur
                                ? formateur.Nom_Formateur
                                : "Selectioner un Formateur"}
                        </span>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    {afficherSelect && (
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input
                                    onChange={(e) =>
                                        setSearchFormateur(e.target.value)
                                    }
                                    className="input1"
                                    spellcheck="false"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <ul className="options1">
                                {formateurs.map((e, index) => {
                                    if (
                                        e.Nom_Formateur.toLowerCase().includes(
                                            searchFormateur.toLowerCase()
                                        )
                                    ) {
                                        return (
                                            <li
                                                onClick={() =>
                                                    handleSelected(e)
                                                }
                                                key={index}
                                            >
                                                {e.Nom_Formateur}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="choisir_input_box select">
                    <p>Salle </p>
                    <div
                        onClick={() =>
                            setAfficherSelectSalle(!afficherSelectSalle)
                        }
                        className="select-btn1"
                    >
                        <span> {salle ? salle : "Selectioner une Salle"}</span>
                        <i className="uil uil-angle-down"></i>
                    </div>

                    {afficherSelectSalle && (
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input
                                    className="input"
                                    spellcheck="false"
                                    type="text"
                                    placeholder="Search"
                                    onChange={(e) =>
                                        setSearchSalle(e.target.value)
                                    }
                                />
                            </div>
                            <ul className="options">
                                {salles.map((e, index) => {
                                    if (
                                        e.Id_Salle.toLowerCase().includes(
                                            searchSalle.toLowerCase()
                                        )
                                    ) {
                                        return (
                                            <li
                                                onClick={() =>
                                                    handleSelectedSalle(e)
                                                }
                                                key={index}
                                            >
                                                {e.Id_Salle}
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="choisir_input_box2 select">
                    <p>Module</p>
                    <div
                        onClick={() =>
                            setAfficherSelectModule(!AfficherSelectModule)
                        }
                        className="select-btn1"
                    >
                        <span>
                            {" "}
                            {module ? module : "Selectioner un Module"}
                        </span>
                        <i className="uil uil-angle-down"></i>
                    </div>
                    {AfficherSelectModule && (
                        <div className="content">
                            <div className="search">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input
                                    onChange={(e) =>
                                        setSearchModule(e.target.value)
                                    }
                                    className="input2"
                                    spellcheck="false"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <ul className="options2">
                                {modules.map((e, index) => {
                                    if (
                                        e.module.code_module
                                            .toLowerCase()
                                            .includes(
                                                searchModule.toLowerCase()
                                            )
                                    ) {
                                        return (
                                            <li
                                                onClick={() =>
                                                    handleSelectedModule(
                                                        e.module
                                                    )
                                                }
                                                key={index}
                                            >
                                                {e.module.code_module} (
                                                {e.module.Intitule_module})
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    )}
                </div>
                <div className="choisir_input_box">
                    <table
                        style={{
                            backgroundColor: seanceGenerate?.bg,
                            color: seanceGenerate?.color,
                            cursor: seanceGenerate.id ? "grab" : "not-allowed",
                        }}
                        draggable={seanceGenerate.id ? "true" : "false"}
                        onDragStart={handleDragStart}
                    >
                        <tr>
                            <th>
                                {seanceGenerate.id ? seanceGenerate.formateur : "Foramteur"}
                            </th>
                        </tr>
                        <tr>
                            <th>{seanceGenerate.id ? seanceGenerate.Id_Salle : "Salle"}</th>
                        </tr>
                        <tr>
                            <th>{seanceGenerate.id ? seanceGenerate.module : "Module"}</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CreerSeance;

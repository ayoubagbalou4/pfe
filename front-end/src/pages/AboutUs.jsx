import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>
            <Navbar2 />
            <div className="about-section">
                <div className="aboutPage">
                    <div className="imgAbout">
                        <img src="http://localhost:3000/images/work-time-animate.svg" alt="" />
                    </div>
                    <div className="aboutContent">
                        <h1>Bienvenue sur PPI-NTICT</h1>
                        <p>
                            PPI-NTICT, votre solution avancée de gestion
                            des emplois du temps dédiée à l'Institut Spécialisé de
                            Technologie Appliquée NTIC Tanger (ISTA NTIC). Notre objectif
                            principal chez PPI-NTICT est de simplifier la complexité de
                            la planification des emplois du temps au sein de notre
                            établissement. Grâce à notre interface conviviale, les
                            administrateurs peuvent créer, modifier et gérer
                            efficacement les horaires des cours. PPI-NTICT propose des
                            fonctionnalités avancées telles que la gestion des
                            ressources et des salles de classe, permettant ainsi
                            d'optimiser l'utilisation des infrastructures et du
                            personnel.
                        </p>
                    </div>
                </div>
            </div>

            <h1 style={{ textAlign: "center", marginBottom: "60px", color: "#566573" }}>DOUBLE-AC Team</h1>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/chel.jpeg"
                            alt="Jane"
                        />
                        <div className="container">
                            <h2>EL-azzabi Chaymae</h2>
                            <p className="title">Developpeuse Web Full Stack</p>

                            <p>chaymaeelazzabi@gmail.com</p>
                            <Link target="_blank" to={'https://www.linkedin.com/in/chaymae-elazzabi-b346a725a/'}>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/agha.jpeg"
                            alt="Mike"
                        />
                        <div className="container">
                            <h2>Agbalou Ayoub</h2>
                            <p className="title">Developpeur Web Full Stack</p>

                            <p>ayoubagbalou4@gmail.com</p>
                            <Link target="_blank" to={'https://www.linkedin.com/in/ayoub-agbalou-495504281/'}>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </Link >
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/ayaEl.jpeg"
                            alt="John"
                        />
                        <div className="container">
                            <h2>Zeggaf Aya</h2>
                            <p className="title">Developpeuse Web Full Stack</p>

                            <p>ayazeggaf68@gmail.com</p>
                            <Link target="_blank" to={'https://www.linkedin.com/in/aya-zeggaf-91264b2a1'}>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;

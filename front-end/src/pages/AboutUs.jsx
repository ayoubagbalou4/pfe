import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const AboutUs = () => {
    return (
        <>
            <Navbar2 />
            <div className="about-section">
                <div className="aboutPage">
                    <div className="imgAbout">
                        <img src='http://localhost:3000/images/time.svg' alt="" />
                    </div>
                    <div className="aboutContent">
                        <h1>Bienvenue sur Double-AC</h1>
                        <p>
                            Double-AC, votre solution avancée de gestion
                            des emplois du temps dédiée à l'Institut Spécialisé de
                            Technologie Appliquée NTIC Tanger (ISTA NTIC). Notre objectif
                            principal chez Double-AC est de simplifier la complexité de
                            la planification des emplois du temps au sein de notre
                            établissement. Grâce à notre interface conviviale, les
                            administrateurs peuvent créer, modifier et gérer
                            efficacement les horaires des cours. Double-AC propose des
                            fonctionnalités avancées telles que la gestion des
                            ressources et des salles de classe, permettant ainsi
                            d'optimiser l'utilisation des infrastructures et du
                            personnel.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <h1 style={{ textAlign: "center", margin: "30px", color: "#566573" }}>Notre Team</h1>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/chaymae.jpg"
                            alt="Jane"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h2>EL-azzabi Chaymae</h2>
                            <p className="title">Developpeuse Web Full Stack</p>

                            <p>chaymaeelazzabi@gmail.com</p>
                            <p>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/ayoub.jpg"
                            alt="Mike"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h2>Agbalou Ayoub</h2>
                            <p className="title">Developpeur Web Full Stack</p>

                            <p>ayoubagbalou@gmail.com</p>
                            <p>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img
                            src="http://localhost:3000/images/aya.jpg"
                            alt="John"
                            style={{ width: "100%" }}
                        />
                        <div className="container">
                            <h2>Zeggaf Aya</h2>
                            <p className="title">Developpeuse Web Full Stack</p>

                            <p>ayazeggaf@gmail.com</p>
                            <p>
                                <button className="button" style={{ margin: "20px 0px" }}>Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default AboutUs;

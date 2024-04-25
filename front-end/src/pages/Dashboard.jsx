import React from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Absence from "../components/Absence";

const Dashboard = () => {
    return (
        <>
            <Layout
            header={"Dashboard"} Dashboard={"active"}
                content={
                    <div class="contentDashboard">
                        <div class="boxs">
                            <Link to={"/"}>
                                {" "}
                                <Box
                                    logo="fa-solid fa-calendar-days"
                                    titre="Suivi le travail :"
                                    text="le dernier TB sauvgarde TB Vide"
                                />
                            </Link>
                            <Link to={"/"}>
                                {" "}
                                <Box
                                    logo="fa-solid fa-calendar-plus"
                                    titre="Nouveau  tablau :"
                                    text="TB Vide"
                                />
                            </Link>
                            <Link to={"/"}>
                                {" "}
                                <Box
                                    logo="fa-regular fa-calendar"
                                    titre="Nouveau  tablau :"
                                    text="base sur la semaine precedente"
                                />
                            </Link>
                        </div>

                    </div>
                }
            />
        </>
    );
};

export default Dashboard;

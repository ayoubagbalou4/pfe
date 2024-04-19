import React from "react";
import Content from "./Content";
import Box from "./Box";
import { Link } from "react-router-dom";

const Dashbord = () => {
    return (
        <>
            <Content
                content={
                    <div class="content">
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

export default Dashbord;

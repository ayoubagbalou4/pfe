import React, { useContext, useEffect, useState } from 'react'
import { contextProvider } from '.././context/Context'
import GroupeSeance from './GroupeSeance'


const MainTable = () => {

    const { seancesParSemaine, groupes, setSeancesParSemaine, formateurs , getSeancesParSemaine} = useContext(contextProvider);

    const getSeanceParGroupe = (groupe, codeSeance) => {


        const seanceParGroupe = seancesParSemaine.filter(seance => seance.Code_Groupe == groupe);
        const seanceParCodeSeance = seanceParGroupe.find(seance => seance.code_seance == codeSeance);
        if (seanceParCodeSeance) {
            const formateur = seanceParCodeSeance.formateur.Abreviation ? seanceParCodeSeance.formateur.Abreviation : seanceParCodeSeance.formateur;
            const module = seanceParCodeSeance.module.code_module ? seanceParCodeSeance.module.code_module : seanceParCodeSeance.module;
            const Id_Salle = seanceParCodeSeance.Id_Salle !== null ? seanceParCodeSeance.Id_Salle : 'A dis';
            const bg = seanceParCodeSeance.formateur.Background_Color ? seanceParCodeSeance.formateur.Background_Color : seanceParCodeSeance.bg;
            const color = seanceParCodeSeance.formateur.Color ? seanceParCodeSeance.formateur.Color : seanceParCodeSeance.color;
            const id = seanceParCodeSeance.id;
            return { code_seance: codeSeance, formateur, module, Id_Salle, id, bg, color , Code_Groupe : groupe } || '';
        } else {
            const seanceFind = seancesParSemaine.find(seance => seance.Code_Groupe == groupe && seance.code_seance == codeSeance)
            if (seanceFind) {
                return seanceFind;
            } else {
                const emptyObject = {
                    id: Math.floor(Math.random() * 205000),
                    Code_Groupe: groupe,
                    code_seance: codeSeance,
                    formateur: "",
                    module: "",
                    Id_Salle: ""
                };
                seancesParSemaine.push(emptyObject);
                return emptyObject;
            }
        }
    };


    const details = (groupe,codeSeance) => {
        console.log(getSeanceParGroupe(groupe,codeSeance))
    }



    return (
        <>

            <div class="main_table">
                <table>
                    <tr>
                        <th>25/02/2024</th>
                        <th>Semaine</th>
                        <th>Lundi</th>
                        <th>Mardi</th>
                        <th>Mercredi</th>
                        <th>Jeudi</th>
                        <th>Vendredi</th>
                        <th>Samedi</th>
                    </tr>

                    <tr>
                        <td><i class="fa-solid fa-file-import"></i></td>
                        <td><i class="fa-regular fa-calendar-days"></i></td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>1S1</td>
                                    <td>1S2</td>
                                    <td>1S3</td>
                                    <td>1S4</td>
                                </tr>
                            </table>
                        </td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>2S1</td>
                                    <td>2S2</td>
                                    <td>2S3</td>
                                    <td>2S4</td>
                                </tr>
                            </table>
                        </td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>3S1</td>
                                    <td>3S2</td>
                                    <td>3S3</td>
                                    <td>3S4</td>
                                </tr>
                            </table>
                        </td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>4S1</td>
                                    <td>4S2</td>
                                    <td>4S3</td>
                                    <td>4S4</td>
                                </tr>
                            </table>
                        </td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>5S1</td>
                                    <td>5S2</td>
                                    <td>5S3</td>
                                    <td>5S4</td>
                                </tr>
                            </table>
                        </td>
                        <td class="nested_table_td">
                            <table>
                                <tr>
                                    <td>6S1</td>
                                    <td>6S2</td>
                                    <td>6S3</td>
                                    <td>6S4</td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    {
                        groupes.map((groupe) => (
                            <tr>
                                <td className={groupe.Code_Filiere}>{groupe.Code_Groupe}</td>
                                <td className="nested_table_td_two">
                                    <table>
                                        <tr><td>Foramteur</td></tr>
                                        <tr><td>Module</td></tr>
                                        <tr><td>Salle</td></tr>
                                    </table>
                                </td>

                                <td className="nested_table_td_three">
                                    <table>
                                        <tr onClick={() => details(groupe.Code_Groupe,'1S1')}>
            {<GroupeSeance
                index={getSeanceParGroupe(groupe.Code_Groupe, '1S1').id}
                formateur={getSeanceParGroupe(groupe.Code_Groupe, '1S1').formateur}
                module={getSeanceParGroupe(groupe.Code_Groupe, '1S1').module}
                salle={getSeanceParGroupe(groupe.Code_Groupe, '1S1').Id_Salle}
                bg={getSeanceParGroupe(groupe.Code_Groupe, '1S1').bg}
                color={getSeanceParGroupe(groupe.Code_Groupe, '1S1').color}
            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '1S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '1S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '1S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '1S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '1S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '1S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '1S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '1S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '1S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '1S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '1S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '1S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '1S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '1S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '1S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '1S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '1S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '1S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>
                                <td className="nested_table_td_three">
                                    <table>
                                        <tr>
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '2S1').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '2S1').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '2S1').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '2S1').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '2S1').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '2S1').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '2S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '2S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '2S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '2S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '2S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '2S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '2S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '2S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '2S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '2S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '2S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '2S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '2S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '2S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '2S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '2S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '2S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '2S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>
                                <td className="nested_table_td_three">
                                    <table>
                                        <tr>
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '3S1').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '3S1').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '3S1').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '3S1').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '3S1').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '3S1').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '3S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '3S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '3S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '3S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '3S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '3S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '3S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '3S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '3S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '3S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '3S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '3S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '3S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '3S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '3S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '3S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '3S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '3S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>
                                <td className="nested_table_td_three">
                                    <table>
                                        <tr>
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '4S1').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '4S1').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '4S1').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '4S1').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '4S1').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '4S1').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '4S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '4S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '4S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '4S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '4S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '4S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '4S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '4S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '4S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '4S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '4S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '4S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '4S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '4S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '4S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '4S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '4S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '4S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>
                                <td className="nested_table_td_three">
                                    <table>
                                        <tr>
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '5S1').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '5S1').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '5S1').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '5S1').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '5S1').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '5S1').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '5S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '5S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '5S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '5S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '5S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '5S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '5S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '5S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '5S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '5S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '5S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '5S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '5S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '5S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '5S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '5S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '5S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '5S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>
                                <td className="nested_table_td_three">
                                    <table>
                                        <tr>
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '6S1').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '6S1').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '6S1').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '6S1').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '6S1').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '6S1').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '6S2').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '6S2').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '6S2').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '6S2').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '6S2').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '6S2').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '6S3').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '6S3').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '6S3').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '6S3').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '6S3').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '6S3').color}
                                            />}
                                            {<GroupeSeance
                                                index={getSeanceParGroupe(groupe.Code_Groupe, '6S4').id}
                                                formateur={getSeanceParGroupe(groupe.Code_Groupe, '6S4').formateur}
                                                module={getSeanceParGroupe(groupe.Code_Groupe, '6S4').module}
                                                salle={getSeanceParGroupe(groupe.Code_Groupe, '6S4').Id_Salle}
                                                bg={getSeanceParGroupe(groupe.Code_Groupe, '6S4').bg}
                                                color={getSeanceParGroupe(groupe.Code_Groupe, '6S4').color}
                                            />}
                                        </tr>
                                    </table>
                                </td>

                            </tr>
                        ))
                    }

                </table>
            </div>
        </>
    )
}
export default MainTable

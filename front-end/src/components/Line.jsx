import React, { useContext } from 'react'
import { contextProvider } from '../context/Context';
import GroupeSeance from './GroupeSeance';

const Line = (props) => {
    const groupe = props.groupe;

    const {seances}=useContext(contextProvider);

    const seanceParGroupe = seances.filter(seance => seance.Code_Groupe == groupe && seance.No_Semaine_Calendrier == 37)

    const seancesLundi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "LUNDI")
    const seanceMardi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "MARDI")
    const seanceMercredi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "MERCREDI")
    const seanceJeudi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "JEUDI")
    const seanceVendredi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "VENDREDI")
    const seanceSamedi = seanceParGroupe.filter(seance => seance.Jour_de_semaine == "SAMEDI")



    return (

        <tr>
            <td className={props.bg}>{groupe}</td>
            <td className="nested_table_td_two">
                <table>
                    <tr><td>Foramteur</td></tr>
                    <tr><td>Module</td></tr>
                    <tr><td>Salle</td></tr>
                </table>
            </td>

{/* lUNDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seancesLundi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module} salle={ seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}   color={seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seancesLundi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seancesLundi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module} salle={ seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}   color={seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seancesLundi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seancesLundi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}   color={seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seancesLundi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seancesLundi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}   color={seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seancesLundi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>
            {/* MARDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seanceMardi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module} salle={ seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}   color={seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seanceMardi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module} salle={ seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}   color={seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seanceMardi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}   color={seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seanceMardi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}   color={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>
            {/* MERCREDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module}salle={ seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}   color={seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seanceMercredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module} salle={ seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}   color={seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seanceMercredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}   color={seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seanceMercredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}   color={seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seanceMercredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>
            {/* JEUDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module} salle={ seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}  color={seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seanceJeudi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module}salle={ seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}   color={seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seanceJeudi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}   color={seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seanceJeudi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}   color={seanceJeudi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>
            {/* VENDREDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module} salle={ seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}   color={seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seanceVendredi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module} salle={ seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}  color={seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seanceVendredi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}   color={seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seanceVendredi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}  color={seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seanceVendredi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>
            {/* SAMEDI */}
            <td className="nested_table_td_three">
                <table>
                    <tr>
                        {/* S1 */}
                        {seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00') ? <GroupeSeance formateur={seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Abreviation} module={seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.module.code_module} salle={ seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.Type_seance=="PRESENTIEL" ? seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.Id_Salle : "A dis"}   color={seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Color}  background={seanceSamedi.find(seance => seance.Horaire_debut == '08:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S2 */}
                        {seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00') ? <GroupeSeance formateur={seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Abreviation} module={seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.module.code_module} salle={ seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.Type_seance=="PRESENTIEL" ? seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.Id_Salle : "A dis"}   color={seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Color}  background={seanceSamedi.find(seance => seance.Horaire_debut == '11:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S3 */}
                        {seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00') ? <GroupeSeance formateur={seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Abreviation} module={seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.module.code_module} salle={ seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.Type_seance=="PRESENTIEL" ? seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.Id_Salle : "A dis"}  color={seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Color}  background={seanceSamedi.find(seance => seance.Horaire_debut == '13:30:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}
                        {/* S4 */}
                        {seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00') ? <GroupeSeance formateur={seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Abreviation} module={seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00')?.module.code_module} salle={ seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00')?.Type_seance=="PRESENTIEL" ? seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00')?.Id_Salle : "A dis"}  color={seanceSamedi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Color}  background={seanceMardi.find(seance => seance.Horaire_debut == '16:00:00')?.formateur.Background_Color} /> : <GroupeSeance formateur={""} module={""} salle={""} />}

                    </tr>
                </table>
            </td>

        </tr>



    )
}

export default Line

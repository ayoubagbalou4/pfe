import React, { useContext } from "react";
import { contextProvider } from "../context/Context";

const Emploi = (props) => {

    const { seancesParSemaine , seances, groupes , affectations } = useContext(contextProvider);


    const getSeance = (groupe,codeSeance) => {
        const seanceParGroupe = seancesParSemaine.filter(seance => seance.Code_Groupe == groupe);
    
        const seanceParCodeSeance = seanceParGroupe.find(seance => seance.code_seance == codeSeance);

        if (seanceParCodeSeance) {
            const formateur = seanceParCodeSeance.formateur.Nom_Formateur;
            const module = seanceParCodeSeance.module.code_module;
            const salle = seanceParCodeSeance.Id_Salle !== null ? seanceParCodeSeance.Id_Salle : 'A dis';
            const bg = seanceParCodeSeance.formateur.Background_Color;
            const color = seanceParCodeSeance.formateur.Color;
            const id = seanceParCodeSeance.id;
            return { code_seance: codeSeance, formateur, module, salle, id, bg, color } || '';
        }
    }

    return (
        <fieldset className="fieldsetOne">
            <fieldset className="fieldsetTwo">
                <legend>
                    <h1>Emploi Du Temps Par Groupe</h1>
                </legend>
                <div className="itemsEmploi">
                    <h4>Annee de formation: <span>{props.annee}</span></h4>
                    <h4>Groupe: <span>{props.groupe}</span></h4>
                    <h4>Mode de formation: <span>RESEDENTIEL</span></h4>
                    <h4>Niveau: <span>TS</span></h4>
                    <h4>Masse Horaire/Smaine: <span>{props.masseHoraire} H</span></h4>
                    <h4>Annee: <span>2023/2024</span></h4>
                </div>
            </fieldset>
            <table>
                <tr class="tr">
                    <th>Heure</th>
                    <th>8:30 - 11:00</th>
                    <th>11:00 - 13:30</th>
                    <th>13:30 - 16:00</th>
                    <th>16:00 - 18:30</th>
                </tr>
                <tr>
                    <td>Lundi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'1S1')?.bg,color:getSeance(props.groupe,'1S1')?.color}} >
                        {getSeance(props.groupe,'1S1')?.formateur} <br /> <hr /> {getSeance(props.groupe,'1S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'1S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'1S2')?.bg,color:getSeance(props.groupe,'1S2')?.color}} >
                        {getSeance(props.groupe,'1S2')?.formateur} <br /> <hr /> {getSeance(props.groupe,'1S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'1S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'1S3')?.bg,color:getSeance(props.groupe,'1S3')?.color}} >
                        {getSeance(props.groupe,'1S3')?.formateur} <br /> <hr /> {getSeance(props.groupe,'1S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'1S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'1S4')?.bg,color:getSeance(props.groupe,'1S4')?.color}} >
                        {getSeance(props.groupe,'1S4')?.formateur} <br /> <hr /> {getSeance(props.groupe,'1S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'1S4')?.module}
                    </td>
                </tr>
                <tr>
                    <td>Mardi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'2S1')?.bg,color:getSeance(props.groupe,'2S1')?.color}} >
                        {getSeance(props.groupe,'2S1')?.formateur}<br /> <hr /> {getSeance(props.groupe,'2S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'2S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'2S2')?.bg,color:getSeance(props.groupe,'2S2')?.color}} >
                        {getSeance(props.groupe,'2S2')?.formateur}<br /> <hr /> {getSeance(props.groupe,'2S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'2S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'2S3')?.bg,color:getSeance(props.groupe,'2S3')?.color}} >
                        {getSeance(props.groupe,'2S3')?.formateur}<br /> <hr /> {getSeance(props.groupe,'2S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'2S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'2S4')?.bg,color:getSeance(props.groupe,'2S4')?.color}} >
                        {getSeance(props.groupe,'2S4')?.formateur}<br /> <hr /> {getSeance(props.groupe,'2S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'2S4')?.module}
                    </td>
                </tr>
                <tr>
                    <td>Mercredi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'3S1')?.bg,color:getSeance(props.groupe,'3S1')?.color}} >
                        {getSeance(props.groupe,'3S1')?.formateur}<br /> <hr /> {getSeance(props.groupe,'3S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'3S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'3S2')?.bg,color:getSeance(props.groupe,'3S2')?.color}} >
                        {getSeance(props.groupe,'3S2')?.formateur}<br /> <hr /> {getSeance(props.groupe,'3S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'3S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'3S3')?.bg,color:getSeance(props.groupe,'3S3')?.color}} >
                        {getSeance(props.groupe,'3S3')?.formateur}<br /> <hr /> {getSeance(props.groupe,'3S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'3S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'3S4')?.bg,color:getSeance(props.groupe,'3S4')?.color}} >
                        {getSeance(props.groupe,'3S4')?.formateur}<br /> <hr /> {getSeance(props.groupe,'3S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'3S4')?.module}
                    </td>
                </tr>
                <tr>
                    <td>Jeudi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'4S1')?.bg,color:getSeance(props.groupe,'4S1')?.color}} >
                        {getSeance(props.groupe,'4S1')?.formateur}<br /> <hr /> {getSeance(props.groupe,'4S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'4S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'4S2')?.bg,color:getSeance(props.groupe,'4S2')?.color}} >
                        {getSeance(props.groupe,'4S2')?.formateur}<br /> <hr /> {getSeance(props.groupe,'4S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'4S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'4S3')?.bg,color:getSeance(props.groupe,'4S3')?.color}} >
                        {getSeance(props.groupe,'4S3')?.formateur}<br /> <hr /> {getSeance(props.groupe,'4S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'4S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'4S4')?.bg,color:getSeance(props.groupe,'4S4')?.color}} >
                        {getSeance(props.groupe,'4S4')?.formateur}<br /> <hr /> {getSeance(props.groupe,'4S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'4S4')?.module}
                    </td>
                </tr>
                <tr>
                    <td>Vendredi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'5S1')?.bg,color:getSeance(props.groupe,'5S1')?.color}} >
                        {getSeance(props.groupe,'5S1')?.formateur}<br /> <hr /> {getSeance(props.groupe,'5S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'5S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'5S2')?.bg,color:getSeance(props.groupe,'5S2')?.color}} >
                        {getSeance(props.groupe,'5S2')?.formateur}<br /> <hr /> {getSeance(props.groupe,'5S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'5S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'5S3')?.bg,color:getSeance(props.groupe,'5S3')?.color}} >
                        {getSeance(props.groupe,'5S3')?.formateur}<br /> <hr /> {getSeance(props.groupe,'5S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'5S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'5S4')?.bg,color:getSeance(props.groupe,'5S4')?.color}} >
                        {getSeance(props.groupe,'5S4')?.formateur}<br /> <hr /> {getSeance(props.groupe,'5S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'5S4')?.module}
                    </td>
                </tr>
                <tr>
                    <td>Samedi</td>
                    <td style={{backgroundColor:getSeance(props.groupe,'6S1')?.bg,color:getSeance(props.groupe,'6S1')?.color}} >
                        {getSeance(props.groupe,'6S1')?.formateur}<br /> <hr /> {getSeance(props.groupe,'6S1')?.salle} <br /> <hr /> {getSeance(props.groupe,'6S1')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'6S2')?.bg,color:getSeance(props.groupe,'6S2')?.color}} >
                        {getSeance(props.groupe,'6S2')?.formateur}<br /> <hr /> {getSeance(props.groupe,'6S2')?.salle} <br /> <hr /> {getSeance(props.groupe,'6S2')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'6S3')?.bg,color:getSeance(props.groupe,'6S3')?.color}} >
                        {getSeance(props.groupe,'6S3')?.formateur}<br /> <hr /> {getSeance(props.groupe,'6S3')?.salle} <br /> <hr /> {getSeance(props.groupe,'6S3')?.module}
                    </td>
                    <td style={{backgroundColor:getSeance(props.groupe,'6S4')?.bg,color:getSeance(props.groupe,'6S4')?.color}} >
                        {getSeance(props.groupe,'6S4')?.formateur}<br /> <hr /> {getSeance(props.groupe,'6S4')?.salle} <br /> <hr /> {getSeance(props.groupe,'6S4')?.module}
                    </td>
                </tr>
            </table>
        </fieldset>
    );
};

export default Emploi;

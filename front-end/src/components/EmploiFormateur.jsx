import React, { useContext } from "react";
import { contextProvider } from "../context/Context";

const EmploiFormateur = (props) => {

    const { seancesParSemaine , seances, formateurs , affectations  } = useContext(contextProvider);


    const getSeance = (formateur,codeSeance) => {
        const seanceParFormateur = seancesParSemaine.filter(seance => seance.formateur_Matricule == formateur);
    
        const seanceParCodeSeance = seanceParFormateur.find(seance => seance.code_seance == codeSeance);

        if (seanceParCodeSeance) {
            const groupe = seanceParCodeSeance.Code_Groupe;
            const module = seanceParCodeSeance.module.code_module;
            const salle = seanceParCodeSeance.Id_Salle !== null ? seanceParCodeSeance.Id_Salle : 'A dis';
            const bg = seanceParCodeSeance.formateur.Background_Color;
            const color = seanceParCodeSeance.formateur.Color;
            const id = seanceParCodeSeance.id;
            return { code_seance: codeSeance, groupe, module, salle, id, bg, color } || '';
        }
    }

    return (
        <fieldset className="fieldsetOne">
            <fieldset className="fieldsetTwo">
                <legend>
                    <h1>Emploi Du Temps Par Formateur</h1>
                </legend>
                <div className="itemsEmploi">
                    <h4>Annee de formation: <span>{props.annee}</span></h4>
                    <h4>Formateur: <span>{props.nomFormateur}</span></h4>
                    <h4>Mode de formation: <span>RESEDENTIEL</span></h4>
                    <h4>Niveau: <span>TS</span></h4>
                    <h4>Masse Horaire/Smaine: <span>{props.masseHoraire} H</span></h4>
                    <h4>date: <span>{props.date}</span></h4>
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
                    {
                        getSeance(props.formateur,'1S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'1S1')?.bg,color:getSeance(props.formateur,'1S1')?.color}} >
                            {getSeance(props.formateur,'1S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'1S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'1S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'1S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'1S2')?.bg,color:getSeance(props.formateur,'1S2')?.color}} >
                            {getSeance(props.formateur,'1S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'1S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'1S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'1S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'1S3')?.bg,color:getSeance(props.formateur,'1S3')?.color}} >
                            {getSeance(props.formateur,'1S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'1S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'1S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'1S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'1S4')?.bg,color:getSeance(props.formateur,'1S4')?.color}} >
                            {getSeance(props.formateur,'1S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'1S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'1S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    
                </tr>
                <tr>
                    <td>Mardi</td>
                    {
                        getSeance(props.formateur,'2S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'2S1')?.bg,color:getSeance(props.formateur,'2S1')?.color}} >
                            {getSeance(props.formateur,'2S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'2S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'2S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'2S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'2S2')?.bg,color:getSeance(props.formateur,'2S2')?.color}} >
                            {getSeance(props.formateur,'2S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'2S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'2S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'2S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'2S3')?.bg,color:getSeance(props.formateur,'2S3')?.color}} >
                            {getSeance(props.formateur,'2S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'2S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'2S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'2S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'2S4')?.bg,color:getSeance(props.formateur,'2S4')?.color}} >
                            {getSeance(props.formateur,'2S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'2S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'2S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                </tr>
                <tr>
                    <td>Mercredi</td>
                    {
                        getSeance(props.formateur,'3S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'3S1')?.bg,color:getSeance(props.formateur,'3S1')?.color}} >
                            {getSeance(props.formateur,'3S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'3S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'3S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'3S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'3S2')?.bg,color:getSeance(props.formateur,'3S2')?.color}} >
                            {getSeance(props.formateur,'3S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'3S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'3S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'3S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'3S3')?.bg,color:getSeance(props.formateur,'3S3')?.color}} >
                            {getSeance(props.formateur,'3S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'3S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'3S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'3S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'3S4')?.bg,color:getSeance(props.formateur,'3S4')?.color}} >
                            {getSeance(props.formateur,'3S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'3S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'3S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                </tr>
                <tr>
                    <td>Jeudi</td>
                    {
                        getSeance(props.formateur,'4S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'4S1')?.bg,color:getSeance(props.formateur,'4S1')?.color}} >
                            {getSeance(props.formateur,'4S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'4S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'4S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'4S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'4S2')?.bg,color:getSeance(props.formateur,'4S2')?.color}} >
                            {getSeance(props.formateur,'4S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'4S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'4S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'4S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'4S3')?.bg,color:getSeance(props.formateur,'4S3')?.color}} >
                            {getSeance(props.formateur,'4S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'4S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'4S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'4S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'4S4')?.bg,color:getSeance(props.formateur,'4S4')?.color}} >
                            {getSeance(props.formateur,'4S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'4S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'4S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                </tr>
                <tr>
                    <td>Vendredi</td>
                    {
                        getSeance(props.formateur,'5S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'5S1')?.bg,color:getSeance(props.formateur,'5S1')?.color}} >
                            {getSeance(props.formateur,'5S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'5S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'5S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'5S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'5S2')?.bg,color:getSeance(props.formateur,'5S2')?.color}} >
                            {getSeance(props.formateur,'5S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'5S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'5S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'5S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'5S3')?.bg,color:getSeance(props.formateur,'5S3')?.color}} >
                            {getSeance(props.formateur,'5S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'5S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'5S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'5S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'5S4')?.bg,color:getSeance(props.formateur,'5S4')?.color}} >
                            {getSeance(props.formateur,'5S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'5S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'5S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                </tr>
                <tr>
                    <td>Samedi</td>
                    {
                        getSeance(props.formateur,'6S1')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'6S1')?.bg,color:getSeance(props.formateur,'6S1')?.color}} >
                            {getSeance(props.formateur,'6S1')?.groupe} <br /> <hr /> {getSeance(props.formateur,'6S1')?.salle} <br /> <hr /> {getSeance(props.formateur,'6S1')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'6S2')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'6S2')?.bg,color:getSeance(props.formateur,'6S2')?.color}} >
                            {getSeance(props.formateur,'6S2')?.groupe} <br /> <hr /> {getSeance(props.formateur,'6S2')?.salle} <br /> <hr /> {getSeance(props.formateur,'6S2')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'6S3')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'6S3')?.bg,color:getSeance(props.formateur,'6S3')?.color}} >
                            {getSeance(props.formateur,'6S3')?.groupe} <br /> <hr /> {getSeance(props.formateur,'6S3')?.salle} <br /> <hr /> {getSeance(props.formateur,'6S3')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                    {
                        getSeance(props.formateur,'6S4')?.id ? 
                        <td style={{backgroundColor:getSeance(props.formateur,'6S4')?.bg,color:getSeance(props.formateur,'6S4')?.color}} >
                            {getSeance(props.formateur,'6S4')?.groupe} <br /> <hr /> {getSeance(props.formateur,'6S4')?.salle} <br /> <hr /> {getSeance(props.formateur,'6S4')?.module}
                        </td>
                        : 
                        <td></td> 
                    }
                </tr>
            </table>
        </fieldset>
    );
};

export default EmploiFormateur;

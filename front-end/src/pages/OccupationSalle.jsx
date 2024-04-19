import React, { useContext } from 'react'
// import Navbar from '../components/Navbar'
import { contextProvider } from '../context/Context';
import SeanceSalle from '../components/SeanceSalle';

const OccupationSalle = () => {
  const { salles,  seancesParSemaine } = useContext(contextProvider);


  const salleSeances=(salle,codeSeance)=>{
    let occupation= seancesParSemaine.find(e=>e.Id_Salle==salle && e.code_seance==codeSeance)
    
    return occupation
  }


  console.log(salleSeances('SDD1','1S1'))
  return (
    <>

    <div class="main_table">
        <table>
            <tr>
                <th>Salle</th>
               
                <th>Lundi</th>
                <th>Mardi</th>
                <th>Mercredi</th>
                <th>Jeudi</th>
                <th>Vendredi</th>
                <th>Samedi</th>
            </tr>

            <tr>
                <td><i class="fa-solid fa-school"></i></td>
               
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
                salles.map((salle) => (
                    <tr>
                       
                      <td>{salle.Id_Salle}</td>

                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'1S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'1S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'1S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'1S4')}/></td>
     
                            </tr>
                        </table>
                      </td>
                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'2S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'2S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'2S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'2S4')}/></td>
     
                            </tr>
                        </table>
                      </td>
                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'3S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'3S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'3S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'3S4')}/></td>
     
                            </tr>
                        </table>
                      </td>
                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'4S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'4S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'4S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'4S4')}/></td>
     
                            </tr>
                        </table>
                      </td>
                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'5S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'5S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'5S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'5S4')}/></td>
     
                            </tr>
                        </table>
                      </td>
                      <td class="nested_table_td">
                        <table>
                            <tr>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'6S1')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'6S2')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'6S3')}/></td>
                                <td><SeanceSalle codeSeance={salleSeances(salle.Id_Salle,'6S4')}/></td>
     
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

export default OccupationSalle
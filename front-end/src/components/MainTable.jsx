import React, { useContext } from 'react'
import GroupeLigne from './GroupeLigne'
import { contextProvider } from '../context/Context'
import Line from './Line';

const MainTable = () => {
    const {seances,groupes}=useContext(contextProvider);
    console.log(seances)


  return (
    <div class="main_table">
        <table>
            <tr>
                <th>{seances[0]?.Date}</th>
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
{/*
           <Line groupe="DEVOWFS201"/> */}
           {groupes.map((e,index)=>(
            <Line bg={e.Code_Filiere} key={index} groupe={e.Code_Groupe}/>
           ))}



            </table>
        </div>
  )
}

export default MainTable

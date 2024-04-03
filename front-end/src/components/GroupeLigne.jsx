import React, { useEffect } from 'react'
import GroupeJour from './GroupeJour'
import arr from './../arr'


const GroupeLigne = (props) => {
    const groupe = props.groupe
  return (
    <tr>
        <td className="IDCC">{groupe}</td>
        <td className="nested_table_td_two">
            <table>
                <tr><td>Foramteur</td></tr>
                <tr><td>Module</td></tr>
                <tr><td>Salle</td></tr>
            </table>
        </td>
        <GroupeJour array={arr[groupe].lundi}  />
        <GroupeJour array={arr[groupe].mardi}  />
        <GroupeJour array={arr[groupe].mercredi}  />
        <GroupeJour array={arr[groupe].jeudi}  />
        <GroupeJour array={arr[groupe].vendredi}  />
        <GroupeJour array={arr[groupe].samedi}  />
    </tr>
  )
}

export default GroupeLigne

import React from 'react'


const GroupeSeance = (props) => {
  return (
    <td className="nested_table_td_four">
        <table className={props.formateur}>
            <tr><td>{props.formateur}</td></tr>
            <tr><td>{props.module}</td></tr>
            <tr><td>{props.salle}</td></tr>
        </table>
    </td>
  )
}

export default GroupeSeance

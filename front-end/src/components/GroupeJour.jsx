import React from 'react'
import GroupeSeance from './GroupeSeance'

const GroupeJour = (props) => {
    const jour = props.array
    return (
        <td className="nested_table_td_three">
            <table>
                <tr>
                    <GroupeSeance formateur={jour['1s1']?.formateur} module={jour['1s1']?.module} salle={jour['1s1']?.salle} />
                    <GroupeSeance formateur={jour['1s2']?.formateur} module={jour['1s2']?.module} salle={jour['1s2']?.salle} />
                    <GroupeSeance formateur={jour['1s3']?.formateur} module={jour['1s3']?.module} salle={jour['1s3']?.salle} />
                    <GroupeSeance formateur={jour['1s4']?.formateur} module={jour['1s4']?.module} salle={jour['1s4']?.salle} />
                </tr>
            </table>
        </td>
    )
}

export default GroupeJour

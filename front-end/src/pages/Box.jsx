import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
    <i className={props.logo}></i>
    <h3>{props.titre}</h3>
    <h4>{props.text}</h4>
</div>
  )
}

export default Box
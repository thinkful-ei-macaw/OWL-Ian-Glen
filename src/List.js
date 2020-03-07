import React from 'react';
import './Styles/List.css';


export default function List(props) {

  let status = "";
  props.onStage === true ? status = 'on Stage' :

    props.onStage === false && props.inSession === true ? status = 'In Session' :

      status = 'Left Session'

  return (
    <li className="User" id={props.id}>
      <img src={props.avatar} alt="" className='chatbar-avatar'></img>
      <h2>{props.name}</h2>
      <p className="Status"><ul><li className="Empty"></li></ul>{status}</p>
    </li>
  )
}


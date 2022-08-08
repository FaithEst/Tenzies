import React from "react";
import './game.css';

export default function Die(props){
    return(
        <div className="dice">{props.value}</div>
    )
}
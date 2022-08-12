import React from "react";
import './game.css';

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "green" : "white"
    }
    return(
        <div className="dice" style={styles}>{props.value}</div>
    )
}
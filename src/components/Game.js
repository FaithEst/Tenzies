import React from "react";
import './game.css';
import Die from "./Die";

export default function Game(){
    return(
        <div className="game">
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are 
                the same. Click each die to freeze it at 
                its current value between rolls.
            </p>
            <div className="dice--one">
                <Die value="1"/>
            </div>
        </div>
    )
}
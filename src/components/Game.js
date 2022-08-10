import React, {useState} from "react";
import './game.css';
import Die from "./Die";


/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */
export default function Game(){
    const [numbersArray, setNumbersArray] = useState(allNewDice());

    function allNewDice(){
        const numbers = [];
        for(let num = 0; num < 10; num++){
            numbers.push(Math.ceil(Math.random() * 6));
        }
        return numbers;
    }
    
    const die = numbersArray.map(num => <Die value={num}/>)

    return(
        <div className="game">
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are 
                the same. Click each die to freeze it at 
                its current value between rolls.
            </p>
            <div className="dice--one">
                {die}
            </div>
        </div>
    )
}
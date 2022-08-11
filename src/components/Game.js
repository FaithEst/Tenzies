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

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 * 
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
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
    function rollDice(){
        setNumbersArray(allNewDice())
    }
    const die = numbersArray.map(num => <Die value={num}/>)
    console.log("component render")
    return(
        <div className="game">
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are 
                the same. Click each die to freeze it at 
                its current value between rolls.
            </p>
            <div className="all--dice">
                {die}
            </div>
            <div>
                <button className="roll--dice" onClick={rollDice}>ROLL</button>
            </div>
        </div>
    )
}
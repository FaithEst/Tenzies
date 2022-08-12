import React, {useState} from "react";
import './game.css';
import Die from "./Die";
import { nanoid } from "nanoid";

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

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 * 
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

/**
 * Challenge: Add conditional styling to the Die component
 * so that if it's held (isHeld === true), its background color
 * changes to a light green (#59E391)
 * 
 * Remember: currently the Die component has no way of knowing
 * if it's "held" or not.
 */

export default function Game(){
    const [diceObjectArray, setdiceObjectArray] = useState(allNewDice());

    function allNewDice(){    //returns an object with array of 10 random numbers from 1-6 (inclusive)
        const numbers = [];
        for(let num = 0; num < 10; num++){
            numbers.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            });
        }
        return numbers;
    }
    function rollDice(){   //regenerates another set of random numbers
        setdiceObjectArray(allNewDice())
    }
    const die = diceObjectArray.map(num => 
        <Die 
            key={num.id} 
            value={num.value}
            isHeld={num.isHeld}
        />
    )
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
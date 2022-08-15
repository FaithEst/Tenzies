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

/**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

/**
 * Challenge: Update the `holdDice` function to flip
 * the `isHeld` property on the object in the array
 * that was clicked, based on the `id` prop passed
 * into the function.
 * 
 * Hint: as usual, there's > 1 way to accomplish this.
 * I'll be using `dice.map()` and checking for the `id`
 * of the die to determine which one to flip `isHeld` on,
 * but you can do whichever way makes the most sense to you.
 */

/**
 * Challenge: Update the `rollDice` function to not just roll
 * all new dice, but instead to look through the existing dice
 * to NOT role any that are being `held`.
 * 
 * Hint: this will look relatively similiar to the `holdDice`
 * function below. When creating new dice, remember to use
 * `id: nanoid()` so any new dice have an `id` as well.
 */
export default function Game(){
    const [diceObjectArray, setdiceObjectArray] = useState(allNewDice());

    function generateNewDice(){ //generates new dice-face
        return(
            {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        )
    }

    function allNewDice(){    //generate 10 dice faces
        const numbers = [];
        for(let num = 0; num < 10; num++){
            numbers.push(generateNewDice());
        }
        return numbers;
    }

    function rollDice(id){   //regenerates another dice-face if not held
        setdiceObjectArray(prevArray => prevArray.map(dice => (
            dice.isHeld ? 
            dice:
            generateNewDice()
        )))
    }

    function holdDice(id){  // toggles dice-face when clicked
        setdiceObjectArray(prevArray => prevArray.map(dice => (
            id === dice.id ?
            {...dice, isHeld: !dice.isHeld} : 
            dice
        )))
    }

    const die = diceObjectArray.map(num =>    //create a dom element for each dice-face
        <Die 
            key={num.id}
            value={num.value}
            isHeld={num.isHeld}
            holdDice={() => holdDice(num.id)}
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
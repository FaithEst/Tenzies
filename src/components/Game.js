import React, {useState, useEffect} from "react";
import './game.css';
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti';


export default function Game(){
    // initialize an array of 10 dice faces
    const [diceArray, setDiceArray] = useState(allNewDice());

    const [tenzies, setTenzies] = useState(false);


    useEffect(() => {   //Check the dice array for these winning conditions 
        const allHeld = diceArray.every(dice => dice.isHeld);
        const firstValue = diceArray[0].value;
        const allSameValue = diceArray.every(dice => dice.value === firstValue);
        if (allHeld && allSameValue){
            setTenzies(true)
            console.log("You won!");
        }
    }, [diceArray])

    
    const checkTenzies = tenzies ? "New Game" : "Roll Dice";
    
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

    function rollDice(id){   //regenerates another dice-face
        if(!tenzies){
            setDiceArray(prevArray => prevArray.map(dice => (
                dice.isHeld ? 
                dice:
                generateNewDice()
            )))
        } else{
            setTenzies(false)
            setDiceArray(allNewDice())
        }
    }

    function holdDice(id){  // toggles dice-face when clicked
        setDiceArray(prevArray => prevArray.map(dice => (
            id === dice.id ?
            {...dice, isHeld: !dice.isHeld} : 
            dice
        )))
    }

    const die = diceArray.map(num =>    //create a dom element for each dice-face
        <Die 
            key={num.id}
            value={num.value}
            isHeld={num.isHeld}
            holdDice={() => holdDice(num.id)}
        />
    )

    return(
        <div className="game">
            {tenzies && <Confetti/>}
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
                <button className="roll--dice" onClick={rollDice}>{checkTenzies}</button>
            </div>
        </div>
    )
}
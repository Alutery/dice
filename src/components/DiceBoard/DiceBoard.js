import React from 'react'
import './DiceBoard.css'
import Dice from '../Dice/Dice'

export const DiceTypeEnum = {'even': 'even', 'odd': 'odd'}
Object.freeze(DiceTypeEnum)

const DiceBoard = props => {
    const { diceList } = props

    return (
        <div className="dice-board">
            <div className="dice">
                {diceList.map((dice, index) => (
                    <Dice type={dice.type} roll={dice.roll} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default DiceBoard

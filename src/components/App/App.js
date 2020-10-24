import React, {useState} from 'react'
import './App.css'
import {Button, Container, Navbar, Row} from 'react-bootstrap'
import DiceBoard, {DiceTypeEnum} from '../DiceBoard/DiceBoard'

const initList = [
    {type: DiceTypeEnum.even, roll: 6},
    {type: DiceTypeEnum.odd, roll: 3}
]

function App() {
    const [score, setScore] = useState(0)
    const [diceList, setDiceList] = useState(initList)

    const rollDices = () => {
        setScore(0)
        let updatedScore = 0
        const updatedList = diceList.map(dice => {
            const roll = getRandomNumber()
            updatedScore += roll
            return {
                type: dice.type === DiceTypeEnum.even
                    ? DiceTypeEnum.odd
                    : DiceTypeEnum.even,
                roll
            }
        })
        setDiceList(updatedList)
        setScore(updatedScore)
    }

    const addDice = () => {
        if(diceList.length < 12) {
            setScore(0)
            setDiceList(diceList => [...diceList, {type: DiceTypeEnum.odd, roll: 1}])
        }
    }

    const removeDice = () => {
        if(diceList.length > 0) {
            setScore(0)
            setDiceList(diceList => diceList.slice(0, diceList.length - 1))
        }
    }

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    return (
        <div className="app">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            Score: {score}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <DiceBoard diceList={diceList}/>
                <Row className="justify-content-center app__buttons">
                    <Button
                        className="mx-2" variant="outline-danger"
                        disabled={diceList.length === 0}
                        onClick={removeDice}>
                        Remove Dice
                    </Button>
                    <Button
                        className="mx-2"
                        onClick={rollDices}>
                        Roll Dice
                    </Button>
                    <Button
                        className="mx-2" variant="outline-primary"
                        disabled={diceList.length === 12}
                        onClick={addDice}>
                        Add Dice
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default App
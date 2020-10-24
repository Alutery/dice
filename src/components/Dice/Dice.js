import React from 'react'
import './Dice.css'
import cn from 'classnames'

const Dice = props => {
    const {type, roll} = props

    return (
        <ol className={cn('die-list', `${type}-roll`)} data-roll={roll}>
            <li className="die-item" data-side="1">
                <span className="dot"/>
            </li>
            <li className="die-item" data-side="2">
                <span className="dot"/>
                <span className="dot"/>
            </li>
            <li className="die-item" data-side="3">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </li>
            <li className="die-item" data-side="4">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </li>
            <li className="die-item" data-side="5">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </li>
            <li className="die-item" data-side="6">
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
                <span className="dot"/>
            </li>
        </ol>
    )
}

export default Dice
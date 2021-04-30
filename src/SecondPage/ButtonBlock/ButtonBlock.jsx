import React, { Component } from 'react'

import './ButtonBlock.scss'

export default class ButtonBlock extends Component {


    render() {
        const {checkAnswer, exitButton}=this.props
        return (
            <div className="ButtonBlock">
             <button className="accept" onClick={() => checkAnswer()}>OK</button>
            <button className="exit" onClick={() => exitButton()}>EXIT</button>
        </div>
        )
    }
}

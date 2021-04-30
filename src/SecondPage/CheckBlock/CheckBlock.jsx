import React, { Component } from 'react'

import './CheckBlock.scss'

   
export default class CheckBlock extends Component {

    render() {

        const {passedCounter, failedCounter} = this.props
        return (
            <div className = "CheckBlock">
                <div className = "CheckBlock__item CheckBlock__item--passed">
                    <div className = "CheckBlock__name">Passed:</div>
                    <div className = "CheckBlock__counter">{passedCounter}</div>
                </div>
                <div className = "CheckBlock__item">
                    <div className = "CheckBlock__name">Failed:</div>
                    <div className = "CheckBlock__counter">{failedCounter}</div>
                </div>
            </div>
        )
    }
}
        
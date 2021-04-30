import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './WordField.scss'

export default class WordField extends Component {
    
    onChange = (event) => {
        this.props.onChange(event.target.value);
    }

    onKeyDown = (e) => {
        e.preventDefault();
        this.props.checkAnswer()
    }

    render() {
        const {title, showHint, word, disabled, inputWord, resultOfcheck}=this.props;
        return (
            <form className="WordField" onSubmit={this.onKeyDown}>
                <div className="WordField__title">{title}</div>
                {disabled && <input className = "input--disabled" type = "text" disabled value={word} onChange={this.onChange}></input>}
                {!disabled && resultOfcheck &&  <input type = "text" onChange={this.onChange} value={inputWord}></input>} 
                {!disabled && !resultOfcheck && showHint && (inputWord !== word) && <input className = "input--error" type = "text" onChange={this.onChange} value={inputWord}></input>} 
                {!disabled && !resultOfcheck && (inputWord === word) && <input className = "input--accept" type = "text" onChange={this.onChange} value={inputWord}></input>}
                <div className="WordField__message">{!disabled && showHint && (inputWord !== word) && word}</div>      
            </form>
        )
    }
}

WordField.propTypes = {
    word: PropTypes.string,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    showHint: PropTypes.bool,
    onChange: PropTypes.func,
    inputWord: PropTypes.string,
    resultOfcheck: PropTypes.bool,
    checkAnswer: PropTypes.func,
}


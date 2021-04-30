import React, { Component } from 'react'

import './WordsBlock.css'
import WordField from './WordField/WordField'



export default class WordsBlock extends Component {
    
    state = {
        disabledIndex: Math.floor(Math.random()*4),
        filledWords: {
            0: '',
            1: '',
            2: '',
            3: '',
        },
    }

    componentDidMount() {
        this.setDisabledFieldValue()
        
    }  

    setDisabledFieldValue =() => {
        const { filledWords, disabledIndex } = this.state;
        const { words } = this.props;

        this.setState({
            filledWords: {
                ...filledWords,
                [disabledIndex]: words[disabledIndex]
            }
        })
    }

    wordsOnChange = () => {
        this.props.setWordsOnChange(Object.values(this.state.filledWords)) 
    }
      
    
    handleOnChange = (index) =>  (value) => {  
        this.setState({
            ...this.state,
            filledWords: {
                ...this.state.filledWords,
                [index]: value
            }
        }, this.wordsOnChange)
    }


    componentWillReceiveProps(nextProps) {
        
        if(nextProps.words.toString() !== this.props.words.toString()) {
            const disabledIndex = Math.floor(Math.random()*4);
            this.setState({
                disabledIndex: disabledIndex,
                filledWords: {
                    0: '',
                    1: '',
                    2: '',
                    3: '',
                    [disabledIndex]: nextProps.words[disabledIndex] 
                },
            })
        }
    }

    render() {
        const { words, isValidWords, checkAnswer} = this.props;
        const { filledWords, disabledIndex}=this.state;
        
        return (
            <div className="WordsBlock">  
                <WordField 
                    title="Infinitive" 
                    inputWord={filledWords[0].toLowerCase()}
                    word={words[0]}
                    disabled={disabledIndex === 0}
                    showHint={!isValidWords && (filledWords[0] !== words[0])}
                    onChange={this.handleOnChange(0)}
                    resultOfcheck={isValidWords}
                    checkAnswer={checkAnswer}

                />
                <WordField 
                    title="Past Simple" 
                    word={words[1]}
                    inputWord={filledWords[1].toLowerCase()}
                    disabled={disabledIndex === 1}
                    showHint={!isValidWords && (filledWords[1] !== words[1])}
                    onChange={this.handleOnChange(1)}
                    resultOfcheck={isValidWords}
                    checkAnswer={checkAnswer}

                />
                <WordField
                    title="Past Participle" 
                    word={words[2]}
                    inputWord={filledWords[2].toLowerCase()}
                    disabled={disabledIndex === 2}
                    showHint={!isValidWords && (filledWords[2] !== words[2])}
                    onChange={this.handleOnChange(2)}
                    resultOfcheck={isValidWords}
                    checkAnswer={checkAnswer}

                />
                <WordField
                    title="Translation" 
                    word={words[3]}
                    inputWord={filledWords[3].toLowerCase()}
                    disabled={disabledIndex === 3}
                    showHint={!isValidWords && (filledWords[3] !== words[3])}
                    onChange={this.handleOnChange(3)}
                    resultOfcheck={isValidWords}
                    checkAnswer={checkAnswer}

                />
            </div>
        )
    }
}

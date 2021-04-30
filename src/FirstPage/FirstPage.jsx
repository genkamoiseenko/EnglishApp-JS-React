import React, { Component } from 'react'

import './FirstPage.scss'


export default class FirstPage extends Component {
 
  render() {

    const {setLanguage} = this.props;

    return (
      <div className = "FirstPage">
          <div className = "FirstPage__title">Please, choose a translation language:</div>
          <div className = "FirstPage__button">
            <button className="button--ukr" onClick={() => setLanguage("ukr")}>UKR</button>
            <button onClick={() => setLanguage("rus")}>RUS</button>
          </div>
    </div>
    )
  }
}

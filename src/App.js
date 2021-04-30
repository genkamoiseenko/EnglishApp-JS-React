import { Component } from "react";

import './App.scss';

import Navigation from './Navigation/Navigation';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';


class App extends Component {

  state = {
    language: null,
  }

  setLanguage = (language) => {
    this.setState({
      language: language, 
    })
  }

  render() {
    const {language} = this.state;

    return (

      <div className="App">
        <Navigation 
          language={language}
          setHome={() => this.setLanguage(null)}
        />
        <div className="AppWrapper">
          <div className="AppWrapper__content">
            {!language && <FirstPage 
              language={language} 
              setLanguage={this.setLanguage} 
            />}
            
            {language && <SecondPage 
              language={language} 
              setHome={() => this.setLanguage(null)}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


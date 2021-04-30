import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar';


import './Navigation.scss'

export default class Navigation extends Component {
  state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
  }

  handleClick = (newState) => () => {
    this.setState({ 
      open: true, 
      ...newState });
  };

  handleClose = () => {
    this.setState({ 
      ...this.state, 
      open: false 
    });
  };


  notification = () => {
    alert("select a language first")
  } 

  render() {
    const {language, setHome}=this.props;
    const{vertical, horizontal, open}=this.state
    return (
      <div className="Navigation">
        <button onClick={() => setHome()}>HOME</button>  
        <button onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left' })}>TEST</button>
        {!language && <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          message="Select a language first"
          key={vertical + horizontal}
        />}

        {language && <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          message="You are already taking the test"
          key={vertical + horizontal}
        />}
      </div>
    )
  }
}

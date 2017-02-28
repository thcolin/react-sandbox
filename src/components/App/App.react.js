import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './App.styles.js';

class App extends Component{
  render(){
    return(
      <div className={css(styles.global)}>
        <h1 className={css(styles.title, styles.red)}>Hello World</h1>
        <h1 className={css(styles.blue)}>Hello World</h1>
        <img src={'./assets/img/picture.png'} />
      </div>
    );
  }
}

export default App

import React, { Component } from 'react';
import { css } from 'aphrodite';
import styles from './App.styles.js';

class App extends Component{
  render(){
    return(
      <div>
        <h1 className={css(styles.title, styles.red)}>Hello World</h1>
        <h1 className={css(styles.blue)}>Hello World</h1>
      </div>
    );
  }
}

export default App

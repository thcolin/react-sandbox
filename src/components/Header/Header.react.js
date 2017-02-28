import React, { Component } from 'react';
import { css } from 'aphrodite';

import styles from './Header.styles.js';

class Header extends Component{
  render(){
    return(
      <div className={css(styles.global)}>
        <h1 className={css(styles.title, styles.red)}>Hello World</h1>
        <p className={css(styles.blue)}>Lorem ipsum</p>
        <img src="./assets/img/picture.png" />
      </div>
    );
  }
}

export default Header

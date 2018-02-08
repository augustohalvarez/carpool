import React, { Component } from 'react';
import Header from './Header';

import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import styles from './../styles/landing.css';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }


  render() {
    return (
      <div className="Landing">

        <div className={styles.description}>
          <h1 className="h1description">Lets beat traffic together</h1>
          <h1 className="h1description">Meet people who live and work where you do</h1>


          <div className={styles.buttonsWrapper}>
            <Link to='/login'>
              <button className={styles.loginRegisterButton}>Login</button>
            </Link>
            <Link to='/register'>
              <button className={styles.loginRegisterButton}>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

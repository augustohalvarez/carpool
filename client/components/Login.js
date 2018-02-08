import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }


  render() {
    return (
      <form method='POST' action='/api/login' autoComplete='off'>
        <input type="text" name="email" placeholder="email" className="email" />
        <input type="password" name="password" placeholder="password" className="pass" />

        <button type="submit">Login</button>

        <span id='notRegisteredSpan'>
          <h4>Don't have an account? </h4>
        </span>

        <span id='registerLinkSpan'>
          <Link to='/register'>Register</Link>
        </span>

      </form>
    );
  }
}

export default Login;

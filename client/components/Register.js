import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// styles
import styles from './../styles/login.css';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }

  handleTel() {
    let text = document.getElementById('inputTel').value;
    console.log(text);

  }


  render() {
    return (
      <form method='POST' action='/api/register' autoComplete='off'>

        <input type="text" name="fullName" placeholder="full name" className="fullName" />

        <input type="email" name="email"  placeholder="email" className="email" />

        <input type="password" name="password" placeholder="password" className="pass" />

        <input type="password" name="passwordConf" placeholder="confirm password" className="pass" />

        <input type="text" name="phone" placeholder="phone number" className="phone"
          id="inputTel" onChange={this.handleTel}
        />
        {/*** Only Safari supports type 'tel' at the moment. We'll use text ***/}

        <button type="submit">Login</button>

        <span id='notRegisteredSpan'>
          <h4> Have an account? </h4>
        </span>

        <span id='registerLinkSpan'>
          <Link to='/login'>Login</Link>
        </span>

      </form>
    );
  }
}

export default Register;

// modules
import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import axios from 'axios';

// styles
import styles from './../styles/app.css';

// components
import Landing from './Landing';
import Login from './Login';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 'bar'
    }
  }

  render() {
    return (
      <div className={styles.app} >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    );
  }
}

export default App;

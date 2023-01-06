import React, { Component, Fragment } from 'react';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Fragment key="key">
        <button type="button" className="button button--success">
          Hello
        </button>
        <button type="button" className="button button--danger">
          Hello
        </button>
      </Fragment>
    );
  }
}

export default App;

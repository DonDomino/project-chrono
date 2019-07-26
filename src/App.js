import React, {Component} from 'react';
import './App.css';
import store from './store';
import Form from './Form';
import Timers from './Timers';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Timers</h1>  
          <Timers />
          <div className="plus">
          <i className="fa fa-plus"></i>
          </div>
          <Form />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Allbeers from './Allbeers';
import Randombeer from './Randombeer';
import Selectedbeer from './Selectedbeer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/allbeers' component={Allbeers}/>
          <Route exact path='/randombeer' component={Randombeer}/>
          <Route exact path='/:id' component={Selectedbeer}/>

        </Switch>
      </div>
    );
  }
}

export default App;


/*<Route exact path='/allbeers' component={Allbeers}/>
  <Route exact path='/randombeer/:id' component={Randombeer}/> */
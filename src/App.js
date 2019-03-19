import React, { Component } from 'react';
import About from './View/About';
import Projects from './View/Projects'
import Led from './View/Led';
import Autogrow from './View/autoGrow';
import Resume from './View/Resume';
import Footer from './View/footer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import HomePage from "./View/Home"
class App extends Component {
  
  render() {
   const text = "Niko Ruiz";
    return (
      <div className="App" >
        

        <Switch>
        <Route exact path="/" component={HomePage} />
          <Route path="/Home" component={HomePage} />
          <Route path="/About"  component={About} />
          <Route path="/Resume" component={Resume} />
          <Route exact path="/Projects" component={Projects} />
          <Route path="/Projects/LED" component={Led} />
          <Route path="/Projects/AutoGrow" component={Autogrow} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

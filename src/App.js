import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/NavBar/index';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './components/Sidebar/index';
import PastWork from './components/PastWork';

function App() {
  return (

    <React.Fragment>
      <Router>
        <NavBar />

        <Sidebar />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
          <Route component="pastwork" component={PastWork} />
        </Switch>
        <PastWork/>
      </Router>
    </React.Fragment>
    
  
  );
};

export default App;

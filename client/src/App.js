import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import PrimarySearchAppBar from './components/NavbarPage';
import Home from './components/Home';
import Footer from './components/Footer';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Fragment>
        <PrimarySearchAppBar />
        <Router>
          <main>
            <Switch>
            <Route exact path="/" component={Home} />
              <Route path="/content/*" component={Table} />
            </Switch>
          </main>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;

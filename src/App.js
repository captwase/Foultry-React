import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import Details from './Details';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* This is the default route */}
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
          <Route path="/details/:id">
            <Header />
            <Details />
          </Route>
        </Switch>
      </div> 
    </Router>
    
  );
}

export default App;

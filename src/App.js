import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './components/Home';
import Header from './components/Header';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
              <RegisterPage/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

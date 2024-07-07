import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Dashboard from './Pages/Dashboard';
import SelectionPage from './Pages/SelectionPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <Dashboard/>
    //   <SelectionPage/>
    // </div>
    <Router>
      <Switch>
      {/* UNCOMMENT THE BELOW PART AND COMMENT OUT THE ABOVE PART TO VIEW THE login signup part */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/selection" component={SelectionPage} />
        <Route exact path="/admin-login" component={AdminLoginPage} />
        <Route exact path="/user-login" component={AdminLoginPage} /> 
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;

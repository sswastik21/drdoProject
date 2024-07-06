import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Dashboard from './Pages/Dashboard';
import SelectionPage from './Pages/SelectionPage';
import AdminLoginPage from './Pages/AdminLoginPage';
import SignupPage from './Pages/SignupPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;

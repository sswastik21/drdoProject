import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Dashboard from './Pages/Dashboard';
import About from './Pages/About';
import Home from './Pages/HomePage'
  import SelectionPage from './Pages/SelectionPage';
   import AdminLoginPage from './Pages/AdminLoginPage';
  import SignupPage from './Pages/SignupPage';
function App() {
  return (
     // UNCOMMENT THE BELOW PART AND COMMENT OUT THE ABOVE PART TO VIEW THE login signup part
     <div className="App">
       <Navbar/>
       
    <Router>
     <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/selection" component={SelectionPage} />
      <Route exact path="/admin-login" component={AdminLoginPage} />
      <Route exact path="/user-login" component={AdminLoginPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignupPage} />    
      <Route exact path="/about" component={About} />    
    </Switch>
    </div>
  </Router>
  </div>
  );
}

export default App;

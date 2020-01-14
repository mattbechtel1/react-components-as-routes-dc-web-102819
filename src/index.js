import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './Navbar'


const Messages = (props) => {
  return (
    <div>
      <h1>{props.match.params.message}</h1>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <div>
      <NavBar />
      <Route exact path= '/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/messages/:message' component={Messages} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' render={() => <Login />} />
    </div>
  </Router>),
  document.getElementById('root')
);

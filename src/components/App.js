import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Project from '../pages/Project';
import About from '../pages/About';
import Contact from '../pages/Contact';
import '../asset/styles/global.css'

function App() {
  return (
    <Switch>
      <Route path="/portfolio/project/:id" render={(props) => <Project {...props} /> } />
      <Route path="/portfolio" render={(props) => <Portfolio {...props} /> } />
      <Route path="/about" render={(props) => <About {...props} />} />
      <Route path="/contact" render={(props) => <Contact {...props} />} />
      <Route path="/" render={(props) => <Home {...props} />} />
    </Switch>
  );
}

export default App;

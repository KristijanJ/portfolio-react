import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Project from '../pages/Project';
import About from '../pages/About';
import Contact from '../pages/Contact';
import '../asset/styles/global.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], visible: 4 };
  }

  componentDidMount() {
    fetch("http://kristijanjovanovski.com/projects.json")
      .then(res => res.json())
      .then(data => this.setState({ projects: data.projects }))
      .catch(error => console.error(error));
  }

  loadMore = () => {
    this.setState({ visible: this.state.visible + 4 });
  };

  render() {
    return (
      <Switch>
        <Route
          path="/portfolio/project/:id"
          render={props => (
            <Project projects={this.state.projects} {...props} />
          )}
        />
        <Route
          path="/portfolio"
          render={props => (
            <Portfolio
              visible={this.state.visible}
              projects={this.state.projects}
              loadMore={this.loadMore}
              {...props}
            />
          )}
        />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/contact" render={props => <Contact {...props} />} />
        <Route path="/" render={props => <Home {...props} />} />
      </Switch>
    );
  }
}

export default App;

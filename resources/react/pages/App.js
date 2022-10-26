import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import ProjectsList from './ProjectList'
import NewProject from './NewProject'
import SingleProject from './SingleProject'

export default class App extends Component {
    render () {
        return (
          <HashRouter hashType="noslash">
            <div>
                <Header />
                <Switch>
                    <Route exact path='/app' component={ProjectsList} />
                    <Route path='/create' component={NewProject} />
                    <Route path='/:id' component={SingleProject} />
                </Switch>
            </div>
          </HashRouter>
        )
      }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

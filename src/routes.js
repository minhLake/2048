import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

class routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={ Main } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default routes;

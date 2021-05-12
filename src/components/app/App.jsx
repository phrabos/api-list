import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import DetailsContainer from '../../containers/DetailsContainer';
import MoviesContainer from '../../containers/MoviesContainer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route 
            path="/"
            exact
            render={(routerProps) => <MoviesContainer {...routerProps}/>}
          />
          <Route 
            path="/movies/:id" 
            exact
            render={(routerProps) => <DetailsContainer {...routerProps} />} 
          />
        </Switch>
      </Router>
    </>
    

  );
  
}

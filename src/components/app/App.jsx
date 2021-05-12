import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import DetailsContainer from '../../containers/DetailsContainer';
import MoviesContainer from '../../containers/MoviesContainer';

export default function App() {
  return (
    <>
      <Nav variant="pills" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Nav>
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

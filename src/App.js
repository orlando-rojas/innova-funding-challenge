import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import { Home, Board } from "./pages";

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

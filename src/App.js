import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import { Home } from "./pages";

export default function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

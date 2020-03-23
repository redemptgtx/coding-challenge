import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LinkListPage from "containers/LinkListPage";
import AddLinkPage from "containers/AddLinkPage";
import Header from "components/Header";
import Container from "components/Container";
import Toast from "components/Toast";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/add-link">
            <AddLinkPage />
          </Route>
          <Route path="/">
            <LinkListPage />
          </Route>
        </Switch>
        <Toast />
      </Container>
    </Router>
  );
}

export default App;

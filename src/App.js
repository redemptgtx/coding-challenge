import React from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import LinkList from "./components/LinkList";
import LinkItem from "./components/LinkItem";
import AddLink from "./components/AddLink";
import Pagination from "./components/Pagination";
import Toast from "./components/Toast";
import TextInput from "./components/TextInput";

function App() {
  return (
    <Container>
      <Header />
      <AddLink />
      <LinkList>
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </LinkList>
      <Pagination />
      <Toast />
      <TextInput label="Test" placeholder="test" />
    </Container>
  );
}

export default App;

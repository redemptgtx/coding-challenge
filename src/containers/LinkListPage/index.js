import React from "react";

import LinkList from "../../components/LinkList";
import LinkItem from "../../components/LinkItem";
import AddLink from "../../components/AddLink";
import Pagination from "../../components/Pagination";
import Toast from "../../components/Toast";
import SelectInput from "../../components/SelectInput";

function LinkListPage() {
  return (
    <>
      <AddLink />
      <SelectInput />
      <LinkList>
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </LinkList>
      <Pagination />
      <Toast />
    </>
  );
}

export default LinkListPage;

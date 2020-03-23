import React, { useState, useEffect } from "react";

import { getData } from "utils/storage";

import LinkList from "components/LinkList";
import LinkItem from "components/LinkItem";
import AddLink from "components/AddLink";
import Pagination from "components/Pagination";
import SelectInput from "components/SelectInput";

function LinkListPage() {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLinkData();
  }, []);

  function getLinkData() {
    const linkData = getData("links");
    setLinks(linkData);
  }

  function renderLinks() {
    const pageLimit = 5;
    const offset = (page - 1) * pageLimit;
    const linksToBeShown = links.slice(offset, offset + pageLimit);
    return linksToBeShown.map(item => {
      return <LinkItem link={item} key={item.key} />;
    });
  }

  return (
    <>
      <AddLink />
      <SelectInput />
      <LinkList>{renderLinks()}</LinkList>
      {links.length > 5 && (
        <Pagination
          totalPage={Math.ceil(links.length / 5)}
          currentPage={page}
          setPage={setPage}
        />
      )}
    </>
  );
}

export default LinkListPage;

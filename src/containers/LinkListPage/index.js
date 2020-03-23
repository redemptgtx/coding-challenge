import React, { useState, useEffect } from "react";
import moment from "moment";

import { getData, setData } from "utils/storage";

import LinkList from "components/LinkList";
import LinkItem from "components/LinkItem";
import AddLink from "components/AddLink";
import Pagination from "components/Pagination";
import SelectInput from "components/SelectInput";

function LinkListPage() {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);
  const [orderCriteria, setOrderCriteria] = useState("created");

  useEffect(() => {
    getLinkData();
  }, []);

  function getLinkData() {
    const linkData = getData("links");
    const sortedArray = linkData.sort((a, b) => {
      return moment(b.createdAt).format("X") - moment(a.createdAt).format("X");
    });

    setLinks(sortedArray);
  }

  function renderLinks() {
    const pageLimit = 5;
    const offset = (page - 1) * pageLimit;
    const linksToBeShown = links.slice(offset, offset + pageLimit);
    return linksToBeShown.map(item => {
      return <LinkItem link={item} key={item.key} sortLinks={sortLinks} />;
    });
  }

  function sortLinks(dataToSort) {
    const sorted = dataToSort.sort((a, b) => {
      if (a.voteCount > b.voteCount) return -1;
      if (a.voteCount < b.voteCount) return 1;

      if (moment(a.updatedAt).format("X") > moment(b.updatedAt).format("X"))
        return -1;
      if (moment(a.updatedAt).format("X") < moment(b.updatedAt).format("X"))
        return 1;
    });

    setData(sorted);
    setLinks(sorted);
  }

  return (
    <>
      <AddLink />
      <SelectInput onChange={setOrderCriteria} />
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

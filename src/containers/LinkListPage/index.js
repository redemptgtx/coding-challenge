import React, { useState, useEffect } from "react";
import moment from "moment";

import { getData, setData } from "utils/storage";

import LinkList from "components/LinkList";
import LinkItem from "components/LinkItem";
import AddLink from "components/AddLink";
import Pagination from "components/Pagination";
import SelectInput from "components/SelectInput";
import DeleteModal from "components/Modal";

function LinkListPage() {
  const [links, setLinks] = useState([]);
  const [page, setPage] = useState(1);
  const [orderCriteria, setOrderCriteria] = useState("");
  const [isModalOpen, setModalStatus] = useState(false);

  useEffect(() => {
    getLinkData();
  }, []);

  useEffect(() => {
    if (orderCriteria !== "") {
      sortLinks(links);
    }
  }, [orderCriteria, links, sortLinks]);

  function getLinkData() {
    const linkData = getData("links");
    const sortedArray = linkData.sort((a, b) => {
      return moment(a.createdAt).format("X") - moment(b.createdAt).format("X");
    });

    setLinks(sortedArray);
    setData(sortedArray, "links");
  }

  function renderLinks() {
    const pageLimit = 5;
    const offset = (page - 1) * pageLimit;
    const linksToBeShown = links.slice(offset, offset + pageLimit);
    return linksToBeShown.map(item => {
      return (
        <LinkItem
          link={item}
          key={item.key}
          sortLinks={sortLinks}
          toggleModal={toggleModal}
        />
      );
    });
  }

  function sortLinks(dataToSort) {
    const sorted =
      orderCriteria === "asc"
        ? sortAscending(dataToSort)
        : sortDescending(dataToSort);

    setData(sorted, "links");
    setLinks(sorted);
  }

  function sortAscending(dataToSort) {
    const sorted = dataToSort.sort((a, b) => {
      if (a.voteCount > b.voteCount) return 1;
      if (a.voteCount < b.voteCount) return -1;

      if (moment(a.updatedAt).format("X") > moment(b.updatedAt).format("X"))
        return -1;
      if (moment(a.updatedAt).format("X") < moment(b.updatedAt).format("X"))
        return 1;
    });

    return sorted;
  }

  function sortDescending(dataToSort) {
    const sorted = dataToSort.sort((a, b) => {
      if (a.voteCount > b.voteCount) return -1;
      if (a.voteCount < b.voteCount) return 1;

      if (moment(a.updatedAt).format("X") > moment(b.updatedAt).format("X"))
        return -1;
      if (moment(a.updatedAt).format("X") < moment(b.updatedAt).format("X"))
        return 1;
    });

    return sorted;
  }

  function handleCriteriaChange(event) {
    const { value } = event.target;
    console.log(value);
    setOrderCriteria(value);
  }

  function handleRemove() {
    toggleModal();
  }

  function toggleModal() {
    setModalStatus(!isModalOpen);
  }

  return (
    <>
      <AddLink />
      <SelectInput onChange={handleCriteriaChange} />
      <LinkList>{renderLinks()}</LinkList>
      {links.length > 5 && (
        <Pagination
          totalPage={Math.ceil(links.length / 5)}
          currentPage={page}
          setPage={setPage}
        />
      )}
      <DeleteModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </>
  );
}

export default LinkListPage;

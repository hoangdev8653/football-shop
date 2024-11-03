import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";

function Paginate({ data, itemsPerPage, onPageChange }) {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const items = (Array.isArray(data) ? data : []).slice(
      itemOffset,
      endOffset
    );

    setCurrentItems(items);
    setPageCount(Math.ceil(data?.length / itemsPerPage));
    onPageChange(items);
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        disabledClassName={styles.disible}
      />
    </>
  );
}

export default Paginate;

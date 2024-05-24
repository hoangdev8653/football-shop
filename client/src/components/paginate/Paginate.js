import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.scss";

function Paginate({ pageCount, handlePageClick }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={`>`}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      disabledClassName={styles.disible}
    />
  );
}

export default Paginate;

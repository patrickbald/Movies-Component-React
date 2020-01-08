import React from "react";
import _ from "lodash";

const Pagination = props => {
  // destructuring
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  //[1...pagesCount].map()

  return (
    <nav aria-label="Page navigation">
      <ul class="pagination">
        {pages.map(page => (
          <li
            key={page}
            class={page === currentPage ? "page-item active" : "page-item"}
          >
            <a class="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

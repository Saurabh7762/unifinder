import React from "react";
import { Col } from "reactstrap";
import UniCard from "../../components/UniCard/UniCard";
import "./homerightstyle.css";

const HomeRight = ({
  universities,
  onPageChange,
  currentPage,
  totalPages,
  totalCount,
}) => {
  const renderPageNumbers = () => {
    const pagesToShow = 10; // Show 10 pages at a time

    const totalPagesArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    return totalPagesArray.slice(startPage - 1, endPage).map((pageNumber) => (
      <p
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        className={pageNumber === currentPage ? "active pointer" : "pointer"}
      >
        {pageNumber}
      </p>
    ));
  };

  return (
    <div>
      <p>Total universities: {totalCount}</p>
      <>
        {universities.length > 0 ? (
          universities.map((uni) => (
            <Col lg="12" className="mb-4" key={uni.id}>
              <UniCard uniData={uni} />
            </Col>
          ))
        ) : (
          <div>No Results Found</div>
        )}

        <div className="pagination d-flex flex-row justify-content-between">
          <div>
            <button
              className="pagbtn"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous Page
            </button>
          </div>
          {renderPageNumbers()}
          <div>
            <button
              className="pagbtn"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next Page
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomeRight;

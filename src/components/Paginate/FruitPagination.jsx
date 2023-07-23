import React from "react";

const FruitePagination = ({
  totalLength,
  itemPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLength / itemPerPage); i++) {
    //! (16/8) if(2.5) output 3, if(2.125) output 3 // 1,2
    pageNumbers.push(i);
   
  }

  return (
    <div className="flex justify-center items-center space-x-2">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 rounded ${
            pageNumber === currentPage
              ? "bg-secondary-400 text-white"
              : "bg-gray-300 text-secondary-400"
          } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400`}
          onClick={() => setCurrentPage(pageNumber)}
        >
          <p className="font-body font-semibold">{pageNumber}</p>
        </button>
      ))}
    </div>
  );
};

export default FruitePagination;

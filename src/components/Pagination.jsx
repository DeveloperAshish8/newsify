import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex items-center justify-center gap-4 my-3">
      <button
        className="bg-[#1A21ED] rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition  flex md:gap-2 gap-1 text-center  shadow items-center disabled:bg-gray-400"
        onClick={() => setPage((page) => Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        Previous
      </button>
      <button
        className="bg-[#1A21ED] rounded  md:px-8 px-4 md:py-3 py-2 text-base font-semibold text-[white] transition  flex md:gap-2 gap-1 text-center  shadow items-center disabled:bg-gray-400"
        onClick={() => setPage((page) => page + 1)}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;

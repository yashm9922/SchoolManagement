import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    {currentPage > 1 && (
                        <li>
                            <button
                                onClick={() => onPageChange(currentPage - 1)}
                                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500  border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-white   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <span className="sr-only">Previous</span>
                                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                                </svg>
                            </button>
                        </li>
                    )}
                    {
                        pageNumbers.map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => onPageChange(number)}
                                    className={`flex items-center justify-center px-4 h-10 leading-tight border ${currentPage === number ? 'text-blue-600 bg-zinc-700' : 'text-gray-500 hover:bg-gray-100'}  border-gray-300 hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white`}
                                >
                                    {number}
                                </button>
                            </li>
                        ))
                    }
                    {
                        currentPage < totalPages && (
                            <li>
                                <button
                                    onClick={() => onPageChange(currentPage + 1)}
                                    className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-white   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                                    </svg>
                                </button>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;

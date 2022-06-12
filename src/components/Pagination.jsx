import { useState } from 'react';
import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = (props) => {
    const [selected, setSelected] = useState(0);

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    // PAGINATION RANGE
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // IF < THAN TWO TIMES - DO NOT RENDER
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className="flex gap-4 justify-center items-center w-full">
            {/* LEFT ARROW */}
            {currentPage !== 1 && (
                <li onClick={onPrevious} className="cursor-pointer">
                    <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-9 bg-off-1 rounded-full p-3 fill-black hover:bg-off-3`}
                    >
                        <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
                    </svg>
                </li>
            )}
            {paginationRange.map((pageNumber, i) => {
                // IF PAGE IS DOT, THEN RENDER CODE ICON
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots" key={i}>&#8230;</li>;
                }

                // RENDER PAGE PILS
                return (
                    <li
                        key={i}
                        className={`cursor-pointer ${
                            pageNumber == currentPage ? 'bg-off-3' : 'bg-off-1'
                        } rounded-full px-4 py-2 hover:scale-125`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/* RIGHT ARROW */}
            {currentPage !== lastPage && (
                <li onClick={onNext} className="cursor-pointer">
                    <svg
                        clipRule="evenodd"
                        fillRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-9 bg-off-1 rounded-full p-3 fill-black hover:bg-off-3`}
                    >
                        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                    </svg>
                </li>
            )}
        </ul>
    );
};

export default Pagination;

import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = (props) => {
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
        <ul className='flex gap-4 justify-center items-center w-full'>
            {/* LEFT ARROW */}
            <li onClick={onPrevious} className='cursor-pointer'>
                <h1>Left</h1>
            </li>
            {paginationRange.map((pageNumber) => {
                // IF PAGE IS DOT, THEN RENDER CODE ICON
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // RENDER PAGE PILS
                return (
                    <li className='cursor-pointer' onClick={() => onPageChange(pageNumber)} >
                        {pageNumber}
                    </li>
                );
            })}
            {/* RIGHT ARROW */}
            <li onClick={onNext} className='cursor-pointer'>
                <h1>Right</h1>
            </li>
        </ul>
    );
};

export default Pagination;

import React, { useContext, useMemo, useState } from 'react';
import { AppContext } from '../context/appContext';
import ModalShowArtDetail from './modals/ModalShowArtDetail';
import Pagination from './Pagination';

let PageSize = 12;

const ArtList = ({ setView }) => {
    const { art } = useContext(AppContext);
    const [artClicked, setArtClicked] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (data, index) => {
        setArtClicked(data);
        setCurrentIndex(index);
        // HIDE SCROLLBAR
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
    };

    const dataLength = art.length;
    
    // USE MEMO
    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return art.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
        <div className="py-16 px-8">
            <h1 className="text-2xl text-center font-semibold">Artworks</h1>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 py-16">
                {art &&
                    paginatedData.map((data, index) => (
                        <div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-off-1 rounded-lg hover:scale-110 cursor-pointer"
                            key={index}
                            onClick={() => handleClick(data, index)}
                        >
                            <div className="flex md:flex-col gap-1 items-start md:justify-center justify-between">
                                <div className="">
                                    <h1 className="text-sm capitalize break-words">
                                        {data.title.toLowerCase()}
                                    </h1>
                                    <p className="text-xs italic">
                                        {data.medium}
                                    </p>
                                </div>
                                <img
                                    src={data.by.url}
                                    alt="By"
                                    className="w-8 h-8 rounded-md mt-2 object-cover"
                                />
                            </div>
                            <img
                                src={data.url}
                                alt="Artwork"
                                className="w-full h-32 rounded-lg object-cover col-span-2"
                            />
                        </div>
                    ))}
                {artClicked && (
                    <ModalShowArtDetail
                        setArtClicked={setArtClicked}
                        artClicked={artClicked}
                        setCurrentIndex={setCurrentIndex}
                        currentIndex={currentIndex}
                        setView={setView}
                        art={art}
                    />
                )}
            </div>
            {/* // -> START HERE */}
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dataLength}
                pageSize={PageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
            {/* // -> END HERE */}
        </div>
    );
};

export default ArtList;

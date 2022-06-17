import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard';
import Pagination from '../../components/Pagination';
import { AppContext } from '../../context/appContext';
// ITEMS PER PAGINATION
let PageSize = 18;

const CollectionsAll = () => {
    const { id } = useParams();
    const [nameMutation, setNameMutation] = useState([])
    const [random, setRandom] = useState([]);
    const { art } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [getPagination, setGetPagination] = useState([]);
    const dataLength = random.length;

    // FILTER BY ARTIST
    useEffect(() => {
        let matches = [];
        if (art.length > 0) {
            matches = art.filter((a) => {
                const regex = new RegExp(`${id?.slice(-6)}`, 'gi');
                return a.collection.match(regex);
            });
        }
        setNameMutation(matches);
    }, [art?.length > 0])

    // RANDOMIZE FILTERED DATA
    useEffect(() => {
        const shuffle = (aToShuffle) => {
            for (let i = aToShuffle.length - 1; i > 0; i--) {
                let randomPosition = Math.floor(Math.random() * (i + 1));
                let temp = aToShuffle[i];
                // SWAP ELEMENTS
                aToShuffle[i] = aToShuffle[randomPosition];
                aToShuffle[randomPosition] = temp;
            }
            return aToShuffle;
        };
        setRandom(shuffle(nameMutation));
    }, [nameMutation]);


    // PAGINATION
    useEffect(() => {
        const paginatedData = () => {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return random.slice(firstPageIndex, lastPageIndex);
        };
        setGetPagination(paginatedData());
    }, [currentPage, random]);

    return (
        <>
            <div className="bg-navy-100 h-80 flex justify-center items-center bg-cover overflow-hidden bg-center relative" style={{ backgroundImage: `url(${random[0]?.url})` }}>
                <div className="bg-white/60 p-8 h-full w-full backdrop-blur-md flex flex-col justify-center items-center gap-4">
                    <p>Collection</p>
                    <h1 className='text-4xl font-thin'>{random[0]?.collection}</h1>
                </div>
            </div>

            <div className="mx-auto container py-24">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 container mx-auto content-center place-content-center place-items-end">
                    {art &&
                        getPagination?.map((data, i) => (
                            <Link
                                key={i}
                                className="hover:scale-105"
                                to={`/art/${data.id}`}
                            >
                                <ArtCard art={data} />
                            </Link>
                        ))}
                </div>
            </div>
            <div className="pb-24">
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={dataLength}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
            <div className="flex gap-4 items-center justify-center pb-24">
                <Link
                    to="/"
                    className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-off-2 my-8"
                >
                    Go home
                </Link>
                <Link
                    to="/collections"
                    className="py-2 px-4 rounded-xl bg-blue-200 text-xs hover:scale-110 hover:bg-blue-500 my-8"
                >
                    Go to Collections
                </Link>
            </div>
        </>
    )
}

export default CollectionsAll
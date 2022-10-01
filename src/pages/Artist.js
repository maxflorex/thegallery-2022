import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/appContext';
// ITEMS PER PAGINATION
let PageSize = 12;

const ArtistAll = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [getPagination, setGetPagination] = useState([]);
  const { artist } = useContext(AppContext)
  const dataLength = artist.length;

  useEffect(() => {
    const paginatedData = () => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return artist.slice(firstPageIndex, lastPageIndex);
    };
    setGetPagination(paginatedData());
  }, [currentPage, artist]);

  const sb = process.env.REACT_APP_STORAGE_BUCKET

  return (
    <>
      <div className="flex justify-center items-center w-full h-full flex-1">
        <div className="w-full flex flex-col justify-center items-center gap-4 p-8">
          <h1 className="text-left text-4xl font-thin w-full container pt-40 pb-12 px-8">
            Browse All Artist
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 container mx-auto content-center place-content-center place-items-end">
            {artist &&
              getPagination?.map((data, i) => {

                const link = data.url.replace(`https://firebasestorage.googleapis.com/v0/b/${sb}/`, '')
                return (
                  <Link
                    to={`/artist/${data.name
                      .replace(/ /g, '-')
                      .toLowerCase()}`}
                    key={i}
                    className="hover:scale-105"

                  >
                    <div className="flex flex-col items-center justify-center w-full">
                      <img src={`https://ik.imagekit.io/acc/tr:w-400/${link}`} alt="Artist" className='grayscale hover:grayscale-0 h-40 w-40 rounded-full object-cover' />
                      <h1 className='text-sm italic capitalize pt-2'>{data?.name?.toLowerCase()}</h1>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </div>
      <div className="flex flex-col my-16">

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

export default ArtistAll
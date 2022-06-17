import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import Pagination from '../components/Pagination';
import { AppContext } from '../context/appContext';
// ITEMS PER PAGINATION
let PageSize = 24;

const Artworks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [getPagination, setGetPagination] = useState([]);
  const { art } = useContext(AppContext)
  const dataLength = art.length;

  useEffect(() => {
    const paginatedData = () => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return art.slice(firstPageIndex, lastPageIndex);
    };
    setGetPagination(paginatedData());
  }, [currentPage, art]);

  return (
    <>
      <div className="flex justify-center items-center w-full h-full flex-1">
        <div className="w-full flex flex-col justify-center items-center gap-4 p-8">
          <h1 className="text-left text-4xl font-thin w-full container pt-40 pb-12 px-8">
            Browse All Artworks
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-16 container mx-auto content-center place-content-center place-items-end">
            {art &&
              getPagination?.map((data, i) => (
                <section
                  key={i}
                  className="hover:scale-105"

                >
                  <ArtCard art={data} />
                </section>
              ))}
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

export default Artworks
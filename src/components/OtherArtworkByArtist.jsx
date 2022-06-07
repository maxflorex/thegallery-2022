import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export const OtherArtworkByArtist = ({ moreByArtist }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (moreByArtist[0]) {
            console.log('Yes');
            setData(moreByArtist)
        } else {
            console.log('No')
            setData(moreByArtist)
        }
    }, [moreByArtist])

    return (
        <div className="flex flex-col justify-center items-center h-full w-full py-16">
            <h1 className="text-2xl font-light">More Artworks by Artist</h1>
            <div className="grid grid-cols-4 gap-4 mdgap-8 my-16 container mx-auto w-full">
                {data &&
                    data.slice(0, 4).map((data, i) => (
                        <Link
                            key={i}
                            to={`/art/${data.id}`}
                            className="flex flex-col gap-4 border-[1px] border-cream-300 w-full md:p-4 p-2 rounded-md hover:scale-105 hover:bg-white"
                        >
                            <img
                                src={data.url}
                                alt="Artwork"
                                className="h-24 object-cover rounded-md w-full grayscale hover:grayscale-0 opacity-40 hover:opacity-100"
                            />
                            <div className="flex justify-between flex-wrap items-center gap-2">
                                <h1 className="capitalize text-sm">
                                    {data.title.toLowerCase()}
                                </h1>
                                <p className="text-xs italic">
                                    {data.height + ' x ' + data.wide}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

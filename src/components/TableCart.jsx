import React from 'react';
import { Link } from 'react-router-dom';
import useRemoveCart from '../hooks/useRemoveCart';
export function TableCart({ art }) {
    const [HandleRemoveCart] = useRemoveCart();

    return (
        <div className="col-span-2 flex flex-col gap-8 items-start justify-start flex-1 p-8">
            <table className="w-full">
                <thead className="">
                    <tr className="text-xs italic mb-16">
                        <th className="hidden md:block">Artwork</th>
                        <th>Title</th>
                        <th>Medium</th>
                        <th>Artists</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {art &&
                    art.cart.map((data, i) => (
                        <tbody key={i} className="hover:bg-off-1 rounded-full">
                            <tr>
                                <td className="py-4 hidden md:block">
                                    <Link to={`/art/${data.id}`}>
                                        <img
                                            src={data?.url}
                                            alt="Artwork"
                                            className="object-contain rounded-sm px-8 w-40 h-24 mx-auto"
                                        />
                                    </Link>
                                </td>
                                <td className="capitalize text-xs lg:text-sm">
                                    {data.title?.toLowerCase()}
                                </td>
                                <td className="capitalize  italic text-xs">
                                    {data.medium}
                                </td>
                                <td>
                                    <p className="capitalize italic text-xs">
                                        {data?.by?.name?.toLowerCase()}
                                    </p>
                                </td>
                                <td>
                                    <p className="font-bold">${data.price}</p>
                                </td>
                                <td>
                                    <span
                                        className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-pink-200 cursor-pointer"
                                        onClick={() => HandleRemoveCart(data)}
                                    >
                                        Remove
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </table>
        </div>
    );
}

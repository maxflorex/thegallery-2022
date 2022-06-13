import React from 'react';

const CartExists = ({ art }) => {
    console.log(art);
    return (
        <div>
            <div className="w-40 absolute left-0 h-screen bg-black/80 items-stretch z-40">
                <h1>Option 1</h1>
                <h1>Option 2</h1>
            </div>
            <div className="mx-auto container z-20">
                <div className="flex items-center justify-center py-40">
                    <h1 className="text-4xl font-thin">Shopping Cart</h1>
                </div>
                <div className="grid grid-cols-3 w-full text-center">
                    <div className="">Hi</div>
                    <div className="col-span-2 flex flex-col gap-8 items-start justify-start">
                        {art &&
                            art.cart.map((data, i) => (
                                <div
                                    key={i}
                                    className="flex w-full items-center gap-8 justify-start "
                                >
                                    <img
                                        src={data?.url}
                                        alt="Artwork"
                                        className="h-24 w-40 object-contain rounded-md p-4 bg-off-1"
                                    />
                                    <h1 className='capitalize'>{data.title?.toLowerCase()}</h1>
                                    <p>{data.price}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartExists;

import { TableCart } from './TableCart';
import React from 'react';
import CartForm from '../components/forms/CartForm';

const CartExists = ({ art }) => {
    const result = art?.cart?.reduce(function (total, arr) {
        return total + Number(arr.price);
    }, 0);

    console.log(art);

    return (
        <div className="mx-auto container z-20 lg:my-16">
            <div className="flex items-center pt-32 pb-16 px-16">
                <h1 className="text-4xl font-thin text-left">Shopping Cart</h1>
            </div>
            <div className="flex flex-col-reverse lg:flex-row w-full text-center gap-8 flex-wrap-reverse">
                <div className="bg-off-1 p-8 rounded-md lg:w-96 lg:mx-8 w-full px-16">
                    <div className="flex flex-col gap-2 items-center pt-8">
                        <h1>Total cost</h1>
                        <div className="flex gap-2 relative">
                            <h1 className="text-4xl ">{result}</h1>
                            <p className="absolute top-0 -right-6">00</p>
                        </div>
                        <CartForm art={art} total={result} />
                    </div>
                </div>
                <TableCart art={art} />
            </div>
        </div>
    );
};

export default CartExists;

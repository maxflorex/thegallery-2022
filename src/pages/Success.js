import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/undraw_winners_re_wr1l.svg'

const Success = () => {
    return (
        <div className="w-full flex flex-1">
            <div className="flex flex-col justify-center items-center w-full my-40 gap-4">
                <img src={pic} alt="" className='w-96' />
                <h1 className='text-4xl font-thin mt-16'>Congratrulations!</h1>
                <p1 className="italic">Your inquery has been submitted!</p1>
                <div className="flex gap-4 items-center justify-center">
                    <Link
                        to="/"
                        className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-off-2 my-8"
                    >
                        Go home
                    </Link>
                    <Link
                        to="/art"
                        className="py-2 px-4 rounded-xl bg-blue-200 text-xs hover:scale-110 hover:bg-blue-500 my-8"
                    >
                        Add Artworks
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Success
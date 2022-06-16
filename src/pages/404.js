import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../assets/undraw_by_the_road_re_vvs7.svg'

const NotFound = () => {
  return (
    <div className="w-full flex flex-1">
      <div className="flex flex-col justify-center items-center w-full my-40 gap-4">
        <img src={pic} alt="" className='w-96' />
        <h1 className='text-4xl font-thin mt-16'>OOOPS!</h1>
        <p1 className="italic">This page does not exist</p1>
        <div className="flex gap-4 items-center justify-center">
          <Link
            to="/"
            className="py-2 px-4 rounded-xl bg-off-1 text-xs hover:scale-110 hover:bg-off-2 my-8"
          >
            Go home
          </Link>

        </div>
      </div>
    </div>
  )
}

export default NotFound
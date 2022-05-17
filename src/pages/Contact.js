import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buttontw } from '../style/styles';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Contact = () => {

  // DESTRUCTURE THE REDUCER TO GET THE STATE
  const { count } = useSelector((state) => state.counter)
  // CALL DISPATCHER TO USE FUNCTIONS IN THE SLICE
  const dispatch = useDispatch();

  return (
    <div className='w-40 mx-auto flex flex-col justify-center items-center gap-4 my-32'>
      <h3>Counter</h3>
      <h1 className='text-8xl text-black text-center'>{count}</h1>
      <div className="flex gap-4 mt-4">
        <button className={buttontw} onClick={() => dispatch(increment())} >Increment</button>
        <button className={buttontw} onClick={() => dispatch(decrement())} >Decrement</button>
        <button className={buttontw} onClick={() => dispatch(incrementByAmount(20))} >Increment by 20</button>
      </div >
    </div >
  )
}

export default Contact
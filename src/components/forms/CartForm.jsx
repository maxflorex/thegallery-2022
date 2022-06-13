import React from 'react'
import {inputtw3} from '../../style/styles'

const CartForm = () => {
  return (
    <form className='p-4 mt-8 rounded-lg flex flex-col justify-center'>
        <label className='text-xs text-left my-4'>Name</label>        
        <input type="text" className={inputtw3}/>
        <label className='text-xs text-left my-4'>Shipping Address</label>        
        <textarea type="text" className={inputtw3}/>
        <label className='text-xs text-left my-4'>Notes</label>        
        <textarea type="text" className={inputtw3}/>
        <button className='text-xs font-semibold m-auto py-2 px-4 rounded-xl bg-cream-500 my-8 hover:scale-105'>Send Inquery</button>
    </form>
  )
}

export default CartForm
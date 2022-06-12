import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useContext } from 'react'
import { AppContext } from '../context/appContext';
import { db } from '../firebase/config';
import { DivFlex } from '../style/divs';

const Cart = () => {

  const { handleFavorite, art } = useContext(AppContext);

  return (<>
    <DivFlex bgColor='bg-blue-200'>
      {/* <div className="flex py-40 justify-center-items-center gap-8">
        <button onClick={() => handleFavorite(art[0])}>Create</button>
        <button onClick={update}>Update</button>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 pb-32">
        {art && art.slice(0, 24).map((data, index) => (
          <div key={index} className='p-4 hover:bg-blue-100 rounded-lg hover:scale-105' onClick={() => handleFavorite(data)}>
            <img src={data.url} alt='artwork' className='w-full max-h-32 object-cover rounded-sm' />
            <h1 className='text-xl capitalize'>{data.title?.toLowerCase()}</h1>
            <p className='text-xs italic'>{data?.by?.name}</p>
          </div>
        ))}
      </div>
    </DivFlex>
  </>
  )
}

export default Cart
import React, { useEffect, useState } from 'react'
import { useFirestoreId } from '../hooks/useFirestore';
import { useSelector } from 'react-redux';
import CartExists from '../components/CartExists';
import CartDoesNotExist from '../components/CartDoesNotExist';

const Cart = () => {
  const user = useSelector((state) => state.user.user);
  const userName = user?.displayName?.toLowerCase().replace(/ /g, '')
  const cart = useFirestoreId('cart', `${userName}`)
  const [l, setL] = useState(0)

  console.log(l);

  useEffect(() => {
    if (cart?.cart?.length > 0) {
      setL(cart?.cart?.length)
    }
  }, [cart?.length])

  return (<>
    {l > 0 ? (
      <CartExists art={cart} />
    ) : (<CartDoesNotExist />)}
  </>
  )
}

export default Cart
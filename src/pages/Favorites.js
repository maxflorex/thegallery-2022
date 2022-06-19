import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreId } from '../hooks/useFirestore'
import FavoriteExists from '../components/FavoriteExists'
import FavoriteDoesNotExist from '../components/FavoriteDoesNotExist'

const Favorites = () => {
  const user = useSelector((state) => state.user.user);
  const userName = user?.displayName?.toLowerCase().replace(/ /g, '')
  const fav = useFirestoreId('favorites', `${userName}`)
  const [l, setL] = useState(0)

  useEffect(() => {
    if (fav?.favorites?.length > 0) {
      setL(fav?.favorites?.length)
    }
  }, [fav])

  return (
    <>
      {l > 0 ? (
        <FavoriteExists art={fav} />
      ) : (<FavoriteDoesNotExist />)}
    </>
  )
}

export default Favorites 
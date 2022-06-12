import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './pages/404';
import About from './pages/About';
import Artworks from './pages/Artworks';
import Contact from './pages/Contact'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, colRefFavorites, db } from './firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { login, logout } from './redux/userSlice';
import Art from './pages/artwork/[art]';
import Artist from './pages/artist/[artist]'
import axios from 'axios';
import { AppContext } from './context/appContext'
import UseFirestore, { UseFirestoreWhereAB } from './hooks/useFirestore';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites'
import { addDoc, arrayUnion, doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';


function App() {
  const dispatch = useDispatch();
  const [dataArtists, setDataArtists] = useState({})
  const [w, setW] = useState('');
  const [...artist] = UseFirestore('artists')
  const [...art] = UseFirestore('art')
  const [...collection] = UseFirestore('collections')
  const user = useSelector((state) => state.user.user);
  const userName = user?.displayName?.toLowerCase().replace(/ /g, '')
  const favDocRef = doc(db, 'favorites', `${userName}`)
  const [...favCol] = UseFirestore('favorites')
  const [result, setResult] = useState('')
  const [userExists, setUserExists] = useState(false)

  // USE REDUX TO HANDLE USER
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  // GET ART API WITH AXIOS
  useEffect(() => {
    axios.get(`https://api.artic.edu/api/v1/artworks`)
      .then(res => {
        const art = res.data.data;
        setDataArtists(art)
      }).catch((error) => {
        console.log(error);
      });
  }, [])

  // FAVORITE FUNCTION
  const handleFavorite = async (art, id) => {
    if (userExists) {
      await updateDoc(favDocRef, {
        favorites: arrayUnion(art),
        artwork_id: arrayUnion(id)
      }).then(() => {
        alert('Updated! ❤️');
      })
    } else {
      await setDoc(favDocRef, {
        favorites: art,
        artwork_id: id
      }).then(() => {
        alert('New 💟');
      })
    }
  }

  // CHECK IF USER EXISTS IN FAVORITES COLLECTION
  useEffect(() => {
    if (favCol?.length === 0) {
      setResult(false)
    } else if (favCol?.length > 0) {
      setResult(true)
      if (favCol[0].id === userName) {
        setUserExists(true)
      } else {
        setUserExists(false)
      }
    }
  }, [favCol])

  return (
    <AppContext.Provider value={{ dataArtists, setW, w, artist, art, collection, handleFavorite, user, userExists }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/artworks'} element={<Artworks />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/login'} element={<Account />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path={'/art/:id'} element={<Art />} />
          <Route path={'/artist/:id'} element={<Artist />} />
          <Route path={'/favorites'} element={<Favorites />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

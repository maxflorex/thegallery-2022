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
import { auth, colRefFavorites } from './firebase/config';
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
import { addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';


function App() {
  const dispatch = useDispatch();
  const [dataArtists, setDataArtists] = useState({})
  const [love, setLove] = useState([])
  const [favItems, setFavItems] = useState([])
  const [w, setW] = useState('');
  const [...artist] = UseFirestore('artists')
  const [...art] = UseFirestore('art')
  const [...collection] = UseFirestore('collections')
  const user = useSelector((state) => state.user.user);
  const [...favCol] = UseFirestore('favorites')
  const [...favUser] = UseFirestoreWhereAB(user?.uid)

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

  useEffect(() => {
    axios.get(`https://api.artic.edu/api/v1/artworks`)
      .then(res => {
        const art = res.data.data;
        setDataArtists(art)
      }).catch((error) => {
        console.log(error);
      });
  }, [])

  // ON SUBMIT EVENT
  const handleFavorite = (art, e) => {
    e.preventDefault()

    // IF USER EXISTS - HAS FAVORITES
    if (favUser[0]) {
      if (love.length === 0) {
        try {
          setLove(favItems)
          try {
            setLove((prevState) => [...prevState, art])
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          console.log(e);
        }
      } else {
        setLove((prevState) => [...prevState, art])
      }
      updateDoc(doc(colRefFavorites, favUser[0]?.id), {
        user: user.uid,
        favorites: love,
        createdAt: serverTimestamp(),
      }).then(() => {
        alert('New ❤️ added!');
        setFavItems([])
      }).catch((e) => {
        console.log(e);
      })
    } else {
      // IF USER EXISTS - HAS FAVORITES
      try {
        setLove([art])
        try {
          addDoc(colRefFavorites, {
            user: user.uid,
            favorites: art,
            createdAt: serverTimestamp(),
          }).then(() => {
            alert('A 💟 was added');
            setFavItems([])
          });
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    if (favCol.length === undefined) {
      // CHECK IF USER EXISTS IN COLLECTION
      const values = value => favCol.some(collection => collection.user.includes(value))
    }
    setFavItems(favUser[0]?.favorites)
  }, [favCol[0], favItems, favUser, love])

  console.log(favItems);

  return (
    <AppContext.Provider value={{ dataArtists, setW, w, artist, art, collection, handleFavorite, user }}>
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
          <Route path={'/artist/:id'} element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

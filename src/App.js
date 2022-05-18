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
import { auth } from './firebase/config';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, logout } from './redux/userSlice';
import axios from 'axios';
import { AppContext } from './context/appContext'


function App() {
  const dispatch = useDispatch();
  const [dataArtists, setDataArtists] = useState({})

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

  console.log(dataArtists);

  return (
    <AppContext.Provider value={{ dataArtists }}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/artworks'} element={<Artworks />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/login'} element={<Account />} />
          <Route path={'/dashboard'} element={<Dashboard />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;

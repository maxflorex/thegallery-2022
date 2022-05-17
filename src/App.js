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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { login, logout, selectUser } from './redux/userSlice';


function App() {
  // const [user, setUser] = useState('')  
  const dispatch = useDispatch();

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

  return (
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
  );
}

export default App;

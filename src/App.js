import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './pages/404';
import About from './pages/About';
import Account from './pages/Account';
import Artworks from './pages/Artworks';
import Contact from './pages/Contact'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/artworks'} element={<Artworks />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/account'} element={<Account />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

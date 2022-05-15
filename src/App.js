import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/account/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './pages/404';
import About from './pages/About';
import Account from './pages/Login';
import Artworks from './pages/Artworks';
import Contact from './pages/Contact'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={'/'} element={<Home />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/artworks'} element={<Artworks />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/dashboard'} element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

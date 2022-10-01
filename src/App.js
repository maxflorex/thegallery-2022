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
import { useEffect, useState } from 'react';
import { login, logout } from './redux/userSlice';
import Art from './pages/artwork/[art]';
import Artist from './pages/artist/[artist]'
import axios from 'axios';
import { AppContext } from './context/appContext'
import UseFirestore from './hooks/useFirestore';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites'
import Success from './pages/Success';
import CollectionsAll from './pages/collections/[collections]';
import TermsConditions from './pages/TermsConditions';
import Cookies from './pages/Cookies';
import LegalNotices from './pages/LegalNotices';
import Collections from './pages/Collections';
import ScrollToTop from './components/ScrollToTop';
import ArtistAll from './pages/Artist';
import Register from './pages/Register';
import RegisterPage from './pages/Register';

function App() {
	const dispatch = useDispatch();
	const [dataArtists, setDataArtists] = useState({})
	const [w, setW] = useState('');
	const [...artist] = UseFirestore('artists')
	const [...art] = UseFirestore('art')
	const [...collection] = UseFirestore('collections')
	const user = useSelector((state) => state.user.user);
	const userName = user?.displayName?.toLowerCase().replace(/ /g, '')
	const [...favCol] = UseFirestore('favorites')
	const [...cartCol] = UseFirestore('cart')
	const [result, setResult] = useState('')
	const [userExists, setUserExists] = useState(false)
	const [cartExists, setCartExists] = useState(false)

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

	// CHECK IF USER EXISTS IN FAVORITES COLLECTION
	useEffect(() => {
		if (favCol?.length > 0) {
			setResult(true)
			if (favCol[0].id === userName) {
				setUserExists(true)
			} else {
				setUserExists(false)
			}
		}
	}, [favCol])

	// CHECK IF USER EXISTS IN CART COLLECTION
	useEffect(() => {
		if (cartCol?.length > 0) {
			setResult(true)
			if (cartCol[0].id === userName) {
				setCartExists(true)
			} else {
				setCartExists(false)
			}
		}
	}, [cartCol?.cart?.length])

	return (
		<AppContext.Provider value={{ dataArtists, setW, w, artist, art, collection, user, userExists, userName, cartExists }}>
			<Router>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route exact path={'/'} element={<Home />} />
						<Route path={'/contact'} element={<Contact />} />
						<Route path={'/art'} element={<Artworks />} />
						<Route path={'/artist'} element={<ArtistAll />} />
						<Route path={'/about'} element={<About />} />
						<Route path={'/login'} element={<Account />} />
						<Route path={'/register'} element={<RegisterPage />} />
						<Route path={'/dashboard'} element={<Dashboard />} />
						<Route path={'/art/:id'} element={<Art />} />
						<Route path={'/artist/:id'} element={<Artist />} />
						<Route path={'/favorites'} element={<Favorites />} />
						<Route path={'/cart'} element={<Cart />} />
						<Route path={'/success'} element={<Success />} />
						<Route path={'/collections/:id'} element={<CollectionsAll />} />
						<Route path={'/terms-and-conditions'} element={<TermsConditions />} />
						<Route path={'/cookies-policy'} element={<Cookies />} />
						<Route path={'/legal-notices'} element={<LegalNotices />} />
						<Route path={'/collections'} element={<Collections />} />
						<Route path={'/collections/:name'} element={<CollectionsAll />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</Router>
		</AppContext.Provider>
	);
}

export default App;

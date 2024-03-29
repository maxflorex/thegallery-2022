import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { colRefSubscription } from '../../firebase/config';
import useCart from '../../hooks/useCart';
import useFavorite from '../../hooks/useFavorite';
import { UseFirestoreArtByArtist, UseFirestoreArtist } from '../../hooks/useFirestore'
import { buttontw4, inputtw } from '../../style/styles';

const Artist = () => {
	const [show, setShow] = useState('')
	const [random, setRandom] = useState({})
	const [email, setEmail] = useState('')
	const [data, setData] = useState({})
	const { id } = useParams();
	const artistName = id.replace(/-/g, ' ')
	const CapilaizedName = artistName.replace(/\b(\w)/g, s => s.toUpperCase());
	const UpperName = CapilaizedName.toUpperCase()
	const { ...artist1 } = UseFirestoreArtist(CapilaizedName)
	const { ...artist2 } = UseFirestoreArtist(UpperName)

	useEffect(() => {
		if (artist2[0]) {
			setData(artist2[0])
		} else {
			setData(artist1[0])
		}
	}, [artist1, artist2])

	const [...moreByArtist] = UseFirestoreArtByArtist(CapilaizedName, UpperName);

	// ON SUBMIT EVENT
	const handleSubmit = (e) => {
		if (email) {
			e.preventDefault();
			addDoc(colRefSubscription, {
				email: email,
				subscribed_to: data?.name,
				createdAt: serverTimestamp(),
			}).then(() => {
				alert("You're now subscribed!");
				setEmail('')
			});
		} else {
			alert('Enter your email to subscribe to artist')
		}
	};

	function getRandomItem(arr) {
		// GET RANDOM INDEX VALUE
		const randomIndex = Math.floor(Math.random() * arr.length);
		// GET RANDOM VALUE
		const item = arr[randomIndex];
		// RETURN
		return item
	}

	useEffect(() => {
		setRandom(getRandomItem(moreByArtist))

	}, [moreByArtist.length > 0])

	const [HandleFavorite] = useFavorite();
	const [HandleCart] = useCart();

	const navigate = useNavigate();

	const handleNavigate = (id, e) => {
		if (e.target.classList.contains('dismiss')) {
			navigate(`/art/${id}`);
		}
	};

	const sb = process.env.REACT_APP_STORAGE_BUCKET
	const link = data?.url?.replace(`https://firebasestorage.googleapis.com/v0/b/${sb}/`, '')

	return (<>
		<div className="bg-navy-100 h-80 flex justify-center items-center bg-cover overflow-hidden bg-center relative" style={{ backgroundImage: `url(${random?.url})` }}>
			<div className="bg-white/60 p-8 h-full w-full backdrop-blur-md flex flex-col justify-center items-center gap-4">
				{data && (<>
					<p className='italic'>- Local Artist -</p>
					<h1 className='text-center capitalize text-4xl font-light'>{data?.name?.toLowerCase()}</h1>
					<div className="flex gap-2 items-center">
						{data?.flag &&
							<img src={`https://flagcdn.com/${data?.flag?.toLowerCase()}.svg`} alt="Flag" className='h-4' />
						}
						<p>{data?.nationality}</p>
					</div>
					<p className='mb-6 absolute right-8 bottom-4 hidden md:block'>Artworks on display: <span className='font-semibold px-2 py-1 rounded-2xl bg-white ml-2'>{moreByArtist && moreByArtist?.length}</span> </p>
				</>)}

			</div>
		</div>


		<div className="grid grid-cols-4 gap-4 container mx-auto">


			{data && <>
				<div className='w-full flex flex-col items-center my-16 nd:my-24 gap-4 col-span-4 lg:col-span-1'>
					<img src={`https://ik.imagekit.io/acc/tr:w-240/${link}`} alt="Artist" className='w-48 h-48 rounded-full object-cover p-4 bg-cream-100' />
					<h1 className='capitalize text-2xl font-thin italic'>{data?.name?.toLowerCase()}</h1>
					<p className='max-h-[40vh] overflow-y-auto scroll text-justify leading-10 px-8 py-4 mx-8 lg:mx-0'>{data?.bio}</p>
				</div>
			</>}


			<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 lg:m-16 m-8 lg:col-span-3 gap-8 col-span-4 dismiss items-start">
				{moreByArtist && moreByArtist.map((data, i) => {

					const link = data?.url?.replace(`https://firebasestorage.googleapis.com/v0/b/${sb}/`, '')

					return (
						<section key={i} className='cursor-pointer first:col-span-2 group last:row-span-4 dismiss' onMouseEnter={() => setShow(i)} onMouseLeave={() => setShow('')}>
							<div className='flex w-full flex-col gap-4 p-4 border-[1px] border-off-1 group-hover:bg-off-1 rounded-lg dismiss' >
								<div className="overflow-hidden rounded-lg relative dismiss">
									<img src={`https://ik.imagekit.io/acc/tr:w-400/${link}`} alt="Artwork" className='rounded-lg max-h-64 object-cover group-hover:scale-110 w-full opacity-80 group-hover:opacity-100 dismiss' onClick={(e) => handleNavigate(data.id, e)} />
									{show === i &&
										<div className="flex ml-auto gap-4 items-center mt-4 bg-off-1 rounded-2xl py-2 px-4 shadow absolute top-1 right-4 z-40">
											<FiHeart
												className="hover:scale-125 cursor-pointer hover:fill-pink-500"
												onClick={() => HandleFavorite(data)}
											/>
											<FiShoppingCart
												className="hover:scale-125 cursor-pointer hover:fill-blue-500"
												onClick={() => HandleCart(data)}
											/>
										</div>
									}
								</div>
								<h2 className='capitalize text-xs'>{data?.title?.toLowerCase()}</h2>
							</div>
						</section>
					)
				})}
			</div>
		</div>

		{/* SUBSCRIBE */}
		<div className="bg-off-1 py-40 min-h-80 flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)' }}>
			<h1 className='italic lg:text-xl text-md w-3/4 text-center font-normal'>Subscribe to know about new releases from <span className='capitalize underline'>{data?.name?.toLowerCase()}</span></h1>
			<div className="flex gap-4 mt-8">
				<input type="email" placeholder='Enter your email...' required value={email} className={inputtw} onChange={(e) => setEmail(e.target.value)} />

				<button className={buttontw4} onClick={handleSubmit}>Subscribe</button>
			</div>
		</div>
	</>
	)
}

export default Artist

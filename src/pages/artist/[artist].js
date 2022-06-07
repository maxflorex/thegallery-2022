import { addDoc, serverTimestamp } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { colRefSubscription } from '../../firebase/config';
import { UseFirestoreArtByArtist, UseFirestoreArtist } from '../../hooks/useFirestore'
import { buttontw4, inputtw } from '../../style/styles';

const Artist = () => {
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

	return (<>
		<div className="bg-navy-100 h-80 flex justify-center items-center bg-cover overflow-hidden bg-center" style={{ backgroundImage: `url(${moreByArtist[0]?.url})` }}>
			<div className="bg-white/60 p-8 h-full w-full backdrop-blur-md flex flex-col justify-center items-center gap-4">
				{data && (<>
					<h1 className='text-center capitalize text-4xl font-light'>{data?.name?.toLowerCase()}</h1>
					<div className="flex gap-2 items-center">
						<img src={`https://flagcdn.com/${data?.flag?.toLowerCase()}.svg`} alt="Flag" className='h-4' />
						<p>{data?.nationality}</p>
					</div>
					<p className='mb-6'>Artworks on display: <span className='font-bold px-2 py-1 rounded-2xl bg-white ml-2'>{moreByArtist && moreByArtist?.length}</span> </p>
				</>)}

			</div>
		</div>


		<div className="grid grid-cols-4 gap-4 container mx-auto">


			{data && <>
				<div className='w-full flex flex-col items-center my-24 gap-4 col-span-4 lg:col-span-1'>
					<img src={data?.url} alt="Artist" className='w-48 h-48 rounded-full object-cover p-4 bg-cream-100' />
					<h1 className='capitalize text-2xl font-thin italic'>{data?.name?.toLowerCase()}</h1>
					<p className='max-h-[40vh] overflow-y-auto scroll text-justify leading-10 px-8 py-4 mx-8 lg:mx-0'>{data?.bio}</p>
				</div>
			</>}


			<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:m-16 m-8 lg:col-span-3 gap-8 col-span-4">
				{moreByArtist && moreByArtist.map((data, i) => (
					<Link key={i} to={`/art/${data.id}`} className='first:col-span-2 group last:row-span-4'>
						<div className='flex w-full flex-col gap-4 p-4 border-[1px] border-black/10 group-hover:bg-off-1 rounded-lg'>
							<div className="overflow-hidden rounded-lg">
								<img src={data.url} alt="Artwork" className='rounded-lg max-h-64 object-cover group-hover:scale-110 w-full opacity-40 group-hover:opacity-100' />
							</div>
							<h2 className='capitalize'>{data.title.toLowerCase()}</h2>
						</div>
					</Link>
				))}
			</div>
		</div>

		{/* SUBSCRIBE */}
		<div className="bg-cream-100 py-40 min-h-80 flex flex-col justify-center items-center">
			<h1 className='italic lg:text-2xl text-lg w-3/4 text-center'>Subscribe to know about new releases from <span className='capitalize underline'>{data?.name?.toLowerCase()}</span></h1>
			<div className="flex gap-4 mt-8">
				<input type="email" placeholder='Enter your email...' required value={email} className={inputtw} onChange={(e) => setEmail(e.target.value)} />

				<button className={buttontw4} onClick={handleSubmit}>Subscribe</button>
			</div>
		</div>
	</>
	)
}

export default Artist

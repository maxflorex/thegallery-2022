import React from 'react'
import ArtworkGallery from '../components/ArtworkGallery'
import Hero from '../components/Hero'
import Slider from '../components/slider/Slider'

const Home = () => {
  return (
    <div className='mb-32'>
      <Hero />
      <Slider />
    </div>
  )
}

export default Home
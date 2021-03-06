import React from 'react'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import Slider from '../components/slider/Slider'
import ArtworkGallery from '../components/ArtworkGallery'
import Collections from '../components/Collections'
import SliderArtists from '../components/slider/SliderArtists'

const Home = () => {
  return (
    <div className='mb-8 w-full overflow-hidden'>
      <Hero />
      <Slider />
      <CTA />
      <Collections />
      <SliderArtists />
      <ArtworkGallery />
    </div>
  )
}

export default Home
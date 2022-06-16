import React from 'react'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import Slider from '../components/slider/Slider'
import ArtworkGallery from '../components/ArtworkGallery'
import SliderExhibitions from '../components/slider/SliderExhibitions'
import Collections from '../components/Collections'

const Home = () => {
  return (
    <div className='mb-32'>
      <Hero />
      <Slider />
      <CTA />
      <Collections />
      <ArtworkGallery />
    </div>
  )
}

export default Home
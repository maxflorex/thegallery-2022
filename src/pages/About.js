import React from 'react'
import tg from '../assets/trcg.jpg'
import tgaer from '../assets/PANO0001-12.jpg'
import logo from '../assets/tg-logo-navy.svg'
const About = () => {

  return (
    <>
      <div className="h-96 flex justify-center items-center bg-cover overflow-hidden bg-center relative" style={{ backgroundImage: `url(${tg})` }}>
        <div className="bg-white/40 p-8 h-full w-full backdrop-blur-sm flex flex-col justify-center items-center gap-4">
          <img src={logo} alt="Logo" className='w-40' />
          </div>
      </div>
      <div className="my-16 container mx-auto w-full">
        <h1 className='text-4xl font-thin text-center pb-16'>About Us</h1>
        <div className="mx-auto w-1/2 text-justify leading-loose">

        <p>The lush landscape, vibrant coast, rich seafaring culture and sheer luminescence of colour and light found within the Cayman Islands landscape has inspired many an artist to put pen, pencil and paintbrush to paper or canvas, creating a fantastic multi-dimensional artistic offering. Luckily, there are some great venues dotted around the island that give artists the opportunity to show off their work to the public.
        </p>
        <p className='py-8'>The Gallery at The Ritz-Carlton, a bright and airy lengthy expanse that straddles The Ritz-Carlton Resort on West Bay Road, is the perfect venue for showcasing local art in all its stunning glory. Three or four times a year the Gallery Manager Chris Christian, who also runs Cayman Traditional Arts, an entity that promotes and enhances local arts and crafts, curates a new art exhibition, wowing all who view it. Best of all, the exhibitions stay up until the next exhibition is produced, thereby creating a constant, wonderful artistic experience for guests of the Resort.</p>
        <p>Focusing solely on the work of local artists, the exhibitions usually feature work created by around ten to twenty artists, often with a highlighted artist for that particular exhibition. They always include a good mix of professional artists, amateurs who paint and draw just for fun and also often new, up and coming artists looking to break into the art scene.</p>
        <img src={tgaer} alt="Aerial" className='w-full rounded-md mt-16 mb-24' />
        </div>
      </div>
    </>
  )
}

export default About
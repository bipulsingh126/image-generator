import React from 'react'
import { assets } from '../assets/assets'

const GenerateButt = () => {
  return (
    <div className=" pb-20 flex flex-col justify-center items-center ">
      <h1
        className=" text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-800 py-6 md:py-16 lg:py-20 "
        style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}
      >
        {' '}
        See The Magic ,Try Now{' '}
      </h1>

      <button className=" text-white bg-black w-auto  py-2.5 px-4 flex items-center gap-2 rounded-full shadow-md shadow-black/20 hover:scale-105 hover:shadow-black/30 transition-all duration-300 font-semibold tracking-wide">
        {' '}
        Generate Images <img
          src={assets.star_group}
          className="h-6"
          alt=""
        />{' '}
      </button>
    </div>
  )
}

export default GenerateButt

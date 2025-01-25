import React from 'react'
import { stepsData } from '../assets/assets'

const Step = () => {
  return (
    <div className=" flex flex-col justify-center my-32 items-center">
      <h1 className=" text-3xl font-semibold text-center mt-10 sm:text-4xl ">
        {' '}
        How it works{' '}
      </h1>
      <p className=" text-gray-600 mt-5 text-center max-w-xl mx-auto mb-8 ">
        {' '}
        Transform your text into stunning Images in seconds - just type, and
        watch the magic happen
      </p>
      <div className=" space-y-4 w-full max-w-3xl ">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className=" flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 ronded-lg "
          >
            <img width={40} src={item.icon} alt="" />
            <div>
              <h2 className=" text-xl font-medium ">{item.title} </h2>
              <h2 className=" text-gray-600 ">{item.description} </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step

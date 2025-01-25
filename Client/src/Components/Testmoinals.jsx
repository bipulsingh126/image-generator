import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testmoinals = () => {
  return (
    <div className=" flex flex-col justify-center items-center  my-20 py-12  ">
      <h1 className=" text-3xl sm:text-4xl font-semibold mb-2  ">
        Customers Testimonials
      </h1>
      <p className=" text-gray-600 mb-8  ">What Our User Are Saying</p>
      <div className=" flex flex-col gap-5 md:gap-40 md:flex-row items-center  ">
        {testimonialsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} className="rounded-full w-14 h-14" alt="" />
              <div>
                <h2 className="font-medium text-lg">{item.name}</h2>
                <p className="text-gray-600 text-sm">{item.role}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              {Array(item.stars)
                .fill()
                .map((i, index) => (
                  <img
                    key={index}
                    src={assets.rating_star}
                    className="w-4 h-4"
                    alt=""
                  />
                ))}
            </div>
            <p className="text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testmoinals

import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Description = () => {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
      className=" flex flex-col justify-center items-center  my-24 p-6 md:px-28 "
    >
      <h1 className=" text-3xl sm:text-4xl font-semibold mb-2  ">
        Create AI Images{' '}
      </h1>
      <p className=" text-gray-600 mb-8  ">
        {' '}
        Turn your imagination into visuals{' '}
      </p>
      <div className=" flex flex-col gap-5 md:gap-40 md:flex-row items-center  ">
        <img
          src={assets.sample_img_1}
          alt=""
          className=" w-80 xl:w-96 rounded-lg  "
        />
        <div className=" flex flex-col gap-4 ">
          <h2 className=" text-2xl max-w-lg font-medium  mb-4">
            {' '}
            Inroducing the AI-Powered Text to Image Generator{' '}
          </h2>
          <p className="text-gray-600 ">
            ransform your ideas into stunning visuals with our AI-powered Text
            to Image Generator. Designed to bring your imagination to life, this
            innovative tool converts descriptive text into custom images with
            remarkable accuracy and creativity.{' '}
          </p>
          <p className="text-gray-600">
            {' '}
            User-friendly design allows for effortless text input and image
            generation.Experience quick rendering times, so you can get your
            visuals when you need them.Choose from a variety of artistic styles,
            including realism, surrealism, pop art, and moreGenerate images in
            high resolution, suitable for both digital and print use{' '}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;

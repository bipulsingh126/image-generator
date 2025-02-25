import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const naviagte = useNavigate();

  const onclickHandler = () => {
    if (user) {
      naviagte('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" flex flex-col justify-center items-center text-center my-20  "
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className=" text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500  "
      >
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className=" text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center "
      >
        Turn text to <span className="text-[#6583d5] ">image</span>, in seconds{' '}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
        className=" text-gray-600 mt-5 text-center max-w-xl mx-auto "
      >
        {' '}
        Unless Your creativity with AI. Turn your text into stunning visuals art
        in seconds - just type, and watch the magic happen{' '}
      </motion.p>
      <motion.button
        onClick={onclickHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.6, duration: 1.5 },
        }}
        className="sm:text-lg text-white bg-black w-auto mt-8 py-2.5 px-4 flex items-center gap-2 rounded-full shadow-md shadow-black/20 hover:shadow-black/30 transition-all duration-500 font-semibold tracking-wide"
      >
        {' '}
        Generate Images <img
          className="h-6"
          src={assets.star_group}
          alt=""
        />{' '}
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className=" flex items-center justify-center gap-3 mt-16 "
      >
        {Array(6)
          .fill('')
          .map((item, index) => {
            return (
              <motion.img
                whileHover={{ scale: 1.05, duration: 0.1 }}
                className="w-1/6 rounded shadow-lg shadow-black/50  cursor-pointer duration-300 max-sm:w-10 hover:scale-105 transition-all "
                key={index}
                width={70}
                src={
                  index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                }
                alt=""
              />
            );
          })}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className=" mt-2 text-neutral-600 "
      >
        {' '}
        Generate images with Imagify
      </motion.p>
    </motion.div>
  );
};

export default Header;
